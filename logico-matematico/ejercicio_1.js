const investPhraseByWord = (phrase) => {
  let arrayWords = phrase.split(' ');

  let investWord = ''
  let arrayReverse = []

  for (let word of arrayWords) {
    investWord = word.split('').reverse()
    investWord = investWord.join('')
    arrayReverse.push(investWord)
  }

  console.log('frase normal -------->', phrase)
  console.log('frase en reversa ---->', arrayReverse.join(''))
  return arrayReverse.join(',')
}


let main = function () {
  let phrases = ['Hola soy una cadena', 'Programando ando', 'Concatenación']
  for (let phrase of phrases) {
    let phraseRetuned = investPhraseByWord(phrase)

    console.log('frase normal -------->', phrase)
    console.log('frase en reversa ---->', phraseRetuned)
  }
}

main()
