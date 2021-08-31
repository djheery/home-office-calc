const SEISS_UI = (() => {
  const selectors = {
    inputs: Array.from(document.querySelectorAll('.bacc-calc-input')),
    tooltips: Array.from(document.querySelectorAll('.bacc-tooltip-container')),
    seissPayment: document.querySelector('.seiss-payment'),
    seissReductionPercentage: document.querySelector('.seiss-reduction-percentage')
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
    displayResults: (results, error) => {0
      if(error === false) {
        document.querySelector('.bacc-results-container__summary').innerHTML = `
        <p class="mgb-20">Your estimated SEISS payment is <span class="accent-clr fw-bold seiss-payment">£${SEISS_UI.insertCommas(results.grant)}</span>. This is due to a <span class="bacc-warning fw-bold seiss-reduction-percentage">-${(results.pc).toFixed()}%</span> reduction in your profit compared to your average profits whilst trading as a self-employed individual. This means that you recieve <span class="accent-clr fw-bold">${results.po}%</span> of <span class="fw-bold">3 months</span> average pay prior to the pandemic<span class="fw-bold"><br><br>Please make sure</span> you meet the pre-requisites before you apply for the grant</p>
        `
      } else {
        document.querySelector('.bacc-results-container__summary').innerHTML = `
          <p class="mgb-20">To claim the grant your profits from you basis period must be less than your average turnover before the pandemic'</p>
        `
      }
    },
    checkForErrors: (affected, average) => {
      selectors.inputs.forEach(i => i.parentElement.classList.remove('input-error'))
      console.log(affected)
      if(affected > average || affected == NaN || average == NaN ) {
        SEISS_UI.displayResults(0, true)
        selectors.inputs.forEach(i => SEISS_UI.addError(i))
        if(affected < 0 || average < 0) selectors.inputs[1].dataset.error = 'Please enter a number 0 or above'
      } 
    },
    addError: (i) => {
      i.parentElement.classList.add('input-error')
    }
  }
})()