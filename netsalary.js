// function calculateNetSalary(grossSalary, benefits){
 
//     const payeRates = [
//         { min: 0, max: 24000, rate: 0.1 },
//         { min: 24001, max: 32333, rate: 0.25 },
//         { min: 32334, max: 500000, rate: 0.3 },
//         { min: 500001, max: 800000, rate: 0.325 },
//         { min: 800001, max: Infinity, rate: 0.35 }

//     ]
// }
//Calculate PAYE function
function calculatePAYE(grossSalary) {
    const payeRates = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 32333, rate: 0.25 },
        { min: 32334, max: 500000, rate: 0.3 },
        { min: 500001, max: 800000, rate: 0.325 },
        { min: 800001, max: Infinity, rate: 0.35 }
    ];

    let taxableIncome = grossSalary;
    let payee = 0;
    for (const rate of payeRates) {
        if (taxableIncome > rate.min && taxableIncome <= rate.max) {
            payee = (taxableIncome - rate.min) * rate.rate;
            break;
        }
    }
    return payee;
}

// Function to calculate NHIF deductions
function calculateNHIF(basicSalary) {
    const nhifRates = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }
    ];

    let nhifDeductions = 0;
    for (const rate of nhifRates) {
        if (basicSalary >= rate.min && basicSalary <= rate.max) {
            nhifDeductions = rate.deduction;
            break;
        }
    }
    return nhifDeductions;
}

// Function to calculate NSSF deductions
function calculateNSSF(basicSalary) {
    const nssfTierIRate = 0.06; // 6%
    const nssfTierIIMax = 36000;
    const nssfTierIIRate = 0.06; // 6%

    let nssfDeductions = 0;
    if (basicSalary <= nssfTierIIMax) {
        nssfDeductions = basicSalary * nssfTierIRate;
    } else {
        nssfDeductions = nssfTierIIMax * nssfTierIRate + (basicSalary - nssfTierIIMax) * nssfTierIIRate;
    }
    return nssfDeductions;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    const payee = calculatePAYE(grossSalary);

    // Calculate NHIF deductions
    const nhifDeductions = calculateNHIF(basicSalary);

    // Calculate NSSF deductions
    const nssfDeductions = calculateNSSF(basicSalary);

    // Calculate net salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    // Return all calculated values
    return {
        grossSalary,
        payee,
        nhifDeductions,
        nssfDeductions,
        netSalary
    };
}
