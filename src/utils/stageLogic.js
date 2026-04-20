// Phase 3: stage derivation from devotion score
const STAGES = [
  { stage: 1, name: 'Humble', min: 0 },
  { stage: 2, name: 'Prosperous', min: 10 },
  { stage: 3, name: 'Grand', min: 25 },
  { stage: 4, name: 'Divine', min: 50 },
]

export function getStage(devotionScore) {
  return [...STAGES].reverse().find(s => devotionScore >= s.min) ?? STAGES[0]
}
