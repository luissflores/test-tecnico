const calculateCombination = (array, tarjet) => {
  let result = false

  for (let [index, number] of array.entries()) {
    for (let multiplo of array) {
      if (number + multiplo === tarjet) result = true
    }
  }

  return result
}

let main = function () {
  console.log(calculateCombination([2, 5, 8, 44, 1, 7], 9))
  console.log(calculateCombination([55, 3, 8, 11, 45, 1], 12))
  console.log(calculateCombination([4, 8, 48, 44, 1], 11))
}

main()
