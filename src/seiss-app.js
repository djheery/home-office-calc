const SEISS_APP = (() => {
  const ui = SEISS_UI.getSelectors()
  const state = SEISS_STATE.getState()
  const loadEventListeners = () => {
    ui.inputs.forEach(i => i.addEventListener('blur', e => {
      UpdateState(i.dataset.name, parseFloat(i.value))
      SEISS_UI.checkForErrors(state.affectedTurnover, state.averageTurnover)
      if(i.parentElement.classList.contains('input-error')) return
      const calculationResults = SEISS_CALCULATIONS.calculatePercentageChange(state.averageTurnover, state.affectedTurnover)
      SEISS_UI.displayResults(calculationResults, false)
    }))
    window.addEventListener('DOMContentLoaded', e => {
      for(let i = 0; i < ui.inputs.length; i++) {
        UpdateState(ui.inputs[i].dataset.name, parseFloat(ui.inputs[i].value))
      }
      const calculationResults = SEISS_CALCULATIONS.calculatePercentageChange(state.averageTurnover, state.affectedTurnover)
      SEISS_UI.displayResults(calculationResults, false)
    })
    ui.tooltips.forEach(tt => tt.addEventListener('click', SEISS_UI.displayToolTip))
  }

  const UpdateState = (dataName, value) => {
    if(dataName === 'affected-turnover') SEISS_STATE.updateAffectedTurnover(value)
    if(dataName === 'previous-turnover') SEISS_STATE.updateAverageTurnover(value)
  }

  return {
    init: () => {
      loadEventListeners()
      console.log(typeof 1)
    }
  }
})(SEISS_CALCULATIONS, SEISS_UI, SEISS_STATE)


SEISS_APP.init(SEISS_CALCULATIONS, SEISS_UI, SEISS_STATE)