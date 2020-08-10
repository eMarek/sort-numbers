const { performance } = require('perf_hooks')

const randomIntFromInterval = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)

const generateListOfNumbers = (numbersLength, minNumber, maxNumber) => {
  const listOfNumbers = []
  for (let i = 0; i < numbersLength; i++) {
    listOfNumbers.push(randomIntFromInterval(minNumber, maxNumber))
  }
  return listOfNumbers
}

const sortNumbers = (numbers) => numbers.sort(compareFunction)

const compareFunction = (first, second) => first - second

const millisecondsToReadableTime = (duration) => {
  const milliseconds = parseInt((duration % 1000) / 100)
  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  return `${hours} hours, ${minutes} minutes, ${seconds} seconds and ${milliseconds} milliseconds`
}

const executeSorting = (numbersLength, minNumber, maxNumber, interationEstimation) => {
  const numbers = generateListOfNumbers(numbersLength, minNumber, maxNumber)
  console.log(numbers)
  const t0 = performance.now()
  sortNumbers(numbers)
  const t1 = performance.now()
  console.log(numbers)
  const realTime = t1 - t0
  console.log(`Sorting ${numbersLength} small numbers (<${maxNumber}) took ${realTime} milliseconds.`)
  const estimatedTime = realTime * interationEstimation
  const readableEstimation = millisecondsToReadableTime(estimatedTime)
  console.log(`It would take ${readableEstimation} to execute this function ${interationEstimation} times.`)
}

const length = 11
const min = 0
const max = 100
const interations = 10 ** 10

executeSorting(length, min, max, interations)
