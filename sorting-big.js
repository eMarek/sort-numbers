const { performance } = require('perf_hooks')

const randomIntFromInterval = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)

const generateListOfNumbers = (numbersLength, minNumber, maxNumber) => {
  const listOfPowers = []
  for (let i = 0; i < numbersLength; i++) {
    number = {
      a: randomIntFromInterval(minNumber, maxNumber),
      b: randomIntFromInterval(minNumber, maxNumber)
    }
    listOfPowers.push(number)
  }
  return listOfPowers
}

const prepareLogarithms = (powerNumbers) => {
  // https://math.stackexchange.com/questions/2853930/comparing-powers
  return powerNumbers.map((powerNumber) => {
    powerNumber.l = powerNumber.b * Math.log10(powerNumber.a)
    return powerNumber
  })
}

const sortNumbers = (numbers) => numbers.sort(compareFunction)

const compareFunction = (first, second) => first.l - second.l

const executeSorting = (numbersLength, minNumber, maxNumber) => {
  const powerNumbers = generateListOfNumbers(numbersLength, minNumber, maxNumber)
  console.log(powerNumbers)
  const t0 = performance.now()
  const numbers = prepareLogarithms(powerNumbers)
  sortNumbers(numbers)
  const t1 = performance.now()
  console.log(numbers)
  const realTime = t1 - t0
  console.log(
    `Sorting ${numbersLength} powers (a^b) where a and b are random numbers between ${minNumber} and ${maxNumber} took ${realTime} milliseconds.`
  )
}

const length = 10000
const min = 100
const max = 10000

executeSorting(length, min, max)
