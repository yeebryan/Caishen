import { useState, useCallback } from 'react'
import { generateBlessingNumber, shouldRevealBlessing } from '../utils/blessingLogic'

const KEY = 'caishen_state'

const OFFERING_VALUES = {
  coins: 1,
  ingots: 2,
  joss: 2,
  fruits: 1,
}

const STAGE_THRESHOLDS = [
  { stage: 4, name: 'Divine',     min: 50 },
  { stage: 3, name: 'Grand',      min: 25 },
  { stage: 2, name: 'Prosperous', min: 10 },
  { stage: 1, name: 'Humble',     min: 0  },
]

function getStageInfo(score) {
  return STAGE_THRESHOLDS.find(s => score >= s.min)
}

function getNextThreshold(score) {
  const thresholds = [10, 25, 50]
  return thresholds.find(t => t > score) ?? null
}

function todayString() {
  return new Date().toISOString().slice(0, 10)
}

function buildInitialState() {
  return {
    devotionScore: 0,
    streak: 0,
    lastOfferingDate: null,
    todayOfferings: { coins: false, ingots: false, joss: false, fruits: false },
    todayBlessingShown: false,
    lastBlessing: null,
    totalOfferings: 0,
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return buildInitialState()
    const saved = JSON.parse(raw)
    const today = todayString()

    if (saved.lastOfferingDate !== today) {
      return {
        ...saved,
        todayOfferings: { coins: false, ingots: false, joss: false, fruits: false },
        todayBlessingShown: false,
      }
    }
    return saved
  } catch {
    return buildInitialState()
  }
}

function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export function useDevotionState() {
  const [state, setState] = useState(loadState)
  const [pendingBlessing, setPendingBlessing] = useState(null)

  const giveOffering = useCallback((type, currentBlessingShown) => {
    setState(prev => {
      if (prev.todayOfferings[type]) return prev

      const today = todayString()
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)

      let newStreak = prev.streak
      if (prev.lastOfferingDate === yesterday) {
        newStreak = prev.streak + 1
      } else if (prev.lastOfferingDate === today) {
        newStreak = prev.streak
      } else {
        newStreak = 1
      }

      const newState = {
        ...prev,
        devotionScore: prev.devotionScore + OFFERING_VALUES[type],
        streak: newStreak,
        lastOfferingDate: today,
        totalOfferings: (prev.totalOfferings ?? 0) + 1,
        todayOfferings: { ...prev.todayOfferings, [type]: true },
      }

      console.log('caishen_state:', newState)
      saveState(newState)
      return newState
    })

    if (shouldRevealBlessing(currentBlessingShown)) {
      setPendingBlessing(generateBlessingNumber())
    }
  }, [])

  const markBlessingShown = useCallback((number) => {
    setState(prev => {
      const newState = { ...prev, todayBlessingShown: true, lastBlessing: number }
      saveState(newState)
      return newState
    })
    setPendingBlessing(null)
  }, [])

  const stageInfo = getStageInfo(state.devotionScore)
  const nextThreshold = getNextThreshold(state.devotionScore)
  const prevThreshold = STAGE_THRESHOLDS.slice().reverse().find(
    s => s.min <= state.devotionScore && s.min < (nextThreshold ?? Infinity)
  )
  const barMin = prevThreshold?.min ?? 0
  const barMax = nextThreshold ?? 50
  const barProgress = nextThreshold
    ? ((state.devotionScore - barMin) / (barMax - barMin)) * 100
    : 100

  return {
    ...state,
    stageInfo,
    nextThreshold,
    barProgress: Math.min(barProgress, 100),
    pendingBlessing,
    giveOffering,
    markBlessingShown,
  }
}
