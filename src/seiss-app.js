const SEISS_APP = (() => {
  const ui = SEISS_UI.getSelectors()
  const loadEventListeners = () => {
    ui.inputs.forEach(i => i.addEventListener('blur', e => {
      UpdateState(i.dataset.name, parseFloat(i.value))
    }))
    window.addEventListener('DOMContentLoaded', e => {
      for(let i = 0; i < ui.inputs.length; i++) {
        UpdateState(ui.inputs[i].dataset.name, parseFloat(ui.inputs[i].value))
      }
      SEISS_CALCULATIONS.calculatePercentageChange()
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
    }
  }
})(SEISS_CALCULATIONS, SEISS_UI, SEISS_STATE)


SEISS_APP.init(SEISS_CALCULATIONS, SEISS_UI, SEISS_STATE)