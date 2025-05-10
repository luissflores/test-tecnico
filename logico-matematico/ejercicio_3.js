const isPrimeNumber = function (number) {
  if (number < 2) return false
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true
}

const twinPrimeNumbers = (init, end) => {
  let result = []

  for (let number = init; number <= end; number++) {
    if (isPrimeNumber(number) && isPrimeNumber(number + 2)) {
      result.push(`(${number},${number + 2}})`)
    }
  }

  return result
}

let main = function () {
  console.log(twinPrimeNumbers(0, 10))
  console.log(twinPrimeNumbers(100, 150))
  console.log(twinPrimeNumbers(700, 800))
}

main()
