const PangramFinder = function (phrase) {
  this.phrase = phrase
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  let lowerCase = this.phrase.toLowerCase() 
  // let noSpaces = lowerCase.replace(/ /g, '');
  let letters = lowerCase.split('')
  // const onlyLetters = letters.filter((letter) => {
  //   letter.trim() !== ''
  // })
  return this.alphabet.every((letter) => {
    return letters.includes(letter)
  })
}

module.exports = PangramFinder;
