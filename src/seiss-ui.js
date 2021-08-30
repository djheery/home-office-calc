const SEISS_UI = (() => {
  const selectors = {
    inputs: Array.from(document.querySelectorAll('.bacc-calc-input')),
    tooltips: Array.from(document.querySelectorAll('.bacc-tooltip-container'))
  }

  return {
    getSelectors: () => {
      return selectors
    },
    insertCommas: (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }, 
    inputError: (x) => {
      x.parentElement.classList.add('input-error');
    },
    // Tooltips
    displayToolTip: (e) => {
      if(!e.target.classList.contains('bacc-tooltip-icon')) return
      e.target.nextElementSibling.classList.add('bacc-tooltip-displayed')
      e.target.nextElementSibling.addEventListener('click', SEISS_UI.closeToolTip)
    },
    closeToolTip: (e) => {
      if(!e.target.classList.contains('bacc-tooltip-close')) return;
      if(e.target.classList.contains('bacc-tooltip-close')) e.target.parentElement.classList.remove('bacc-tooltip-displayed')
    },
    showResults: () => {

    },
  }
})()