const SEISS_STATE = (() => {
  const state = {
    averageTurnover: 0,
    affectedTurnover: 0,
  }

  return {
    getState: () => {
      return state
    },
    updateAverageTurnover: (v) => {
      state.averageTurnover = v
    },
    updateAffectedTurnover: (v) => {
      state.affectedTurnover = v
    }
  }
})()