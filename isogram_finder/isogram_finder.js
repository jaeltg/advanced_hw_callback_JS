const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
    let lowerCase = this.word.toLowerCase()
    let letters = lowerCase.split('')
    let noDuplicates = new Set(letters)
    return letters.every((letter) => {
        return noDuplicates.has(letter)
    })

}

module.exports = IsogramFinder;
