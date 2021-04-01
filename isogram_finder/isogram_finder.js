const IsogramFinder = function (word) {
    this.word = word.toLowerCase();
}

IsogramFinder.prototype.isIsogram = function () {
    const letters = this.word.split('')
    return letters.every(letter => this.isUnique(letter));
}

IsogramFinder.prototype.isUnique = function(letter) {
    return this.word.indexOf(letter) === this.word.lastIndexOf(letter);
}



module.exports = IsogramFinder;
