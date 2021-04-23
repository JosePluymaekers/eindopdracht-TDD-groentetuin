// do not edit

const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop } = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});



//costs per crop = costs * plants per crop
describe("getCostsForCrop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        costs: 1.5,
        plantsPerCrop: 100
    };

    test("Get costs per crop", () => {
        expect(getCostsForCrop(corn)).toBe(150);
    });
});



//revenue per crop = yield * revenue
describe("getRevenueForCrop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        costs: 1.5,
        plantsPerCrop: 100,
        revenue: 10  //per kilo
    };

    test("Get revenue for crop with no environment factors", () => {
        expect(getRevenueForCrop(corn)).toBe(300);
    });
});


//get Profit For Crop without factors = revenue per crop - costs per crop

describe("getProfitForCrop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        costs: 1.5,
        plantsPerCrop: 100,
        revenue: 10  //per kilo
    };

    test("Get profit for crop with no environment factors", () => {
        expect(getProfitForCrop(corn)).toBe(150);
    });
});
