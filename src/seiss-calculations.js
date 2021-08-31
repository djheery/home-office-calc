const SEISS_CALCULATIONS = (() => {
  return {
    calculatePercentageChange: (averageT, affectedT) => {
      const percentageChange = ((averageT - affectedT) / averageT) * 100
      console.log(percentageChange)
      let results
      if(percentageChange >= 30) grantOwed = SEISS_CALCULATIONS.higherThresholdCalc(averageT)
      if(percentageChange < 30) grantOwed = SEISS_CALCULATIONS.lowerThresholdCalc(averageT)
      return results = {
        grant: grantOwed[0],
        pc: percentageChange,
        po: grantOwed[1]
      }
    },
    lowerThresholdCalc: (avg) => {
      let grantOwed = ((avg * 0.3) / 12) * 3
      if(grantOwed >= 2850) grantOwed = 2850
      return [grantOwed, 30]
    },
    higherThresholdCalc: (avg) => {
      let grantOwed = ((avg * 0.8) / 12) * 3
      if(grantOwed >= 7500) grantOwed = 7500
      return [grantOwed, 80]
    }
  }
})()