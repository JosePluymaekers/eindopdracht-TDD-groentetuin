const getYieldForPlant = (yieldForPlant) => {
    const corn = {
        name: "corn",
        yield: 30,
    };
    return yieldForPlant.yield
}


const getYieldForCrop = (yieldForCrop) => {
    const corn = {
        name: "corn",
        yield: 3,
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    return (corn.yield * input.numCrops)
}





module.exports = {
    getYieldForPlant,
    getYieldForCrop,
};