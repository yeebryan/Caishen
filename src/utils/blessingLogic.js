// Phase 4: blessing number generation and trigger logic
export function generateBlessingNumber() {
  return Math.floor(Math.random() * 9000) + 1000
}

export function shouldRevealBlessing(todayBlessingShown) {
  if (todayBlessingShown) return false
  return Math.random() < 0.3
}
