// 5 add factors
const getYieldForPlant = (input) => {
        return input.yield 
    };

const getYieldForCrop = (input) => {
    return (getYieldForPlant(input.crop) * input.numCrops)
};  

const getTotalYield = ({crops}) => {
    let total = 0;
    crops.forEach(crop => {
        total += getYieldForCrop(crop)
    });
    return total;
};

// 1 costs per crop = plants per crop * costs
const getCostsForCrop = (input) => {
    return(input.costs * input.plantsPerCrop)
    };

// 2 revenue per crop = plants per crop * revenue
const getRevenueForCrop = (input) => {
    return(input.yield * input.revenue)
        };

// 3 get Profit For Crop without factors = revenue per crop - costs per crop
const getProfitForCrop = (input) => {
    const revenuePerCrop = getRevenueForCrop(input)
    const costsPerCrop = getCostsForCrop(input)
    return (revenuePerCrop - costsPerCrop)
    };

// 4 get total profit without factors = profit per crop * number of crops
const getTotalProfit = (input) => {
    return getProfitForCrop(input) * input.numCrops
};

// 5 add factors
const getYieldForPlantWithFactors = (input, environmentFactors) => {
    const sunLow = 0.5
    const sunMedium = 1
    const sunHigh = 1.5

    const windless = 1
    const windy = 0.7
    const stormy = 0.4

    let resultSun;
    if (environmentFactors.sun === "low") {
      resultSun = input.yield * sunLow;
    } else if (environmentFactors.sun === "high") {
      resultSun = input.yield * sunHigh;
    } else {
      resultSun = input.yield;
    }

    let resultWindAndSun;
    if (environmentFactors.wind === "stormy") {
        resultWindAndSun = resultSun * stormy;
      } else if (environmentFactors.wind === "windy") {
        resultWindAndSun = resultSun * windy;
      } else {
        resultWindAndSun = resultSun * windless;
      }
      let resultWindAndSunRounded = Math.round (resultWindAndSun*100) / 100
      return resultWindAndSunRounded

};

// 10 total yield with factors
const getTotalYieldWithFactors = (input, environmentFactors) => {
    return getYieldForPlantWithFactors(input, environmentFactors) * input.numCrops;
};    


// 11 get Revenue For Crop with factors = plants per crop * revenue
const getRevenueForCropWithFactors = (input, environmentFactors) => {
    return(getTotalYieldWithFactors(input, environmentFactors) * input.revenue)
        };

        
// 12 get profit For Crop with factors 
const getProfitForCropWithFactors = (input, environmentFactors) => {
    const revenuePerCrop = getRevenueForCropWithFactors(input, environmentFactors)
    const costsPerCrop = getCostsForCrop(input)
        return (revenuePerCrop - costsPerCrop)
            };

// 13 get total profit with factors 
const getTotalProfitWithFactors = (input, environmentFactors) => {
    return getProfitForCropWithFactors(input, environmentFactors) * input.numCrops
            };


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantWithFactors,
    getTotalYieldWithFactors,
    getRevenueForCropWithFactors,
    getProfitForCropWithFactors, 
    getTotalProfitWithFactors
};