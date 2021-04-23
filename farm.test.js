// do not edit

const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit, getYieldForPlantWithFactors } = require("./farm");

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



// 1 costs per crop = costs * plants per crop
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



// 2 revenue per crop = yield * revenue
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


// 3 get Profit For Crop without factors = revenue per crop - costs per crop

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




// 4 get total profit without factors = profit per crop * number of crops

describe("getTotalProfit", () => {
    const corn = {
        name: "corn",
        yield: 30,
        costs: 1.5,
        plantsPerCrop: 100,
        revenue: 10,  //per kilo
        numCrops: 10,
    };

    test("Get total profit with no environment factors", () => {
        expect(getTotalProfit(corn)).toBe(1500); //150*10
    });
});



// 5 get yield for plant with factors
//low sun factor
describe("getYieldForPlantWithFactors", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
        },
      };
      
      const environmentFactors = {
        sun: "low",
      };

    test("Get yield for plant with low sun factor", () => {
        expect(getYieldForPlantWithFactors(corn, environmentFactors)).toBe(15);
    });
});

//high sun and windy factor
describe("getYieldForPlantWithFactors", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: +50,
          },
          wind: {
              windless: 0,
              windy: -30,
              stormy: -60,
          }
        },
      };
      
      const environmentFactors = {
        sun: "high",
        wind: "windy",
      };

    test("Get yield for plant with high sun and windy factor", () => {
        expect(getYieldForPlantWithFactors(corn, environmentFactors)).toBe(31.5);
    });
});


//low sun and stormy factor
describe("getYieldForPlantWithFactors", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: +50,
          },
          wind: {
              windless: 0,
              windy: -30,
              stormy: -60,
          }
        },
      };
      
      const environmentFactors = {
        sun: "low",
        wind: "stormy",
      };

    test("Get yield for plant with low sun and stormy factor", () => {
        expect(getYieldForPlantWithFactors(corn, environmentFactors)).toBe(6);
    });
});
