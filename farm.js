const getYieldForPlant = (input) => {
    // const corn = {
    //     name: "corn",
    //     yield: 30,
    // };
    return input.yield
}


const getYieldForCrop = (input) => {
    // const corn = {
    //     name: "corn",
    //     yield: 3,
    // };
    // const input = {
    //     crop: corn,
    //     numCrops: 10,
    // };
    return (getYieldForPlant(input.crop) * input.numCrops)
}

const getTotalYield = ({crops}) => {
    let total = 0;
    crops.forEach(crop => {
        total += getYieldForCrop(crop)
    });
    return total;
};


const getCostsForCrop = (input) => {
return(input.costs * input.plantsPerCrop)
    }


//revenue per crop = plants per crop * revenue
const getRevenueForCrop = (input) => {
    return(input.yield * input.revenue)
        }



// --------tot hier werkt het--------



module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop
};