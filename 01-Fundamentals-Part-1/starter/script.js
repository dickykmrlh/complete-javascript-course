const markWeightData1 = 78
const markHeightData1 = 1.69
const johnWeightData1 = 92
const johnHeightData1 = 1.95

const markBMIData1 = markWeightData1 / markHeightData1 ** 2
const johnBMIData1 = johnWeightData1 / johnHeightData1 ** 2
const markHigherBMIDat1 = markBMIData1 > johnBMIData1

console.log(markBMIData1)
console.log(johnBMIData1)
console.log(markHigherBMIDat1)

if (markHigherBMIDat1) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

const markWeightData2 = 95
const markHeightData2 = 1.88
const johnWeightData2 = 85
const johnHeightData2 = 1.76

const markBMIData2 = markWeightData2 / markHeightData2 ** 2
const johnBMIData2 = johnWeightData2 / johnHeightData2 ** 2
const markHigherBMIData2 = markBMIData2 > johnBMIData2

console.log(markBMIData2)
console.log(johnBMIData2)
console.log(markHigherBMIData2)

if (markHigherBMIData2) {
    console.log(`Mark's BMI (${markBMIData2}) is higher than John's!`)
} else {
    console.log("John's BMI is higher than Mark's!")
}