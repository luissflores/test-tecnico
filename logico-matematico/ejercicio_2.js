const evenNumbers = (arrayNumbers) => {
  return arrayNumbers.map(number => number % 2)
}

let main = function () {
  let arrayOne = [2, 7, 9, 12, 33, 15, 22, 12, 4]
  console.log(evenNumbers(arrayOne))

  let arrayTwo = [1, 2, 3, 4, 5, 6, 7, 2, 4, 6, 8, 6]
  console.log(evenNumbers(arrayTwo))
}

main()
