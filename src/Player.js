'use strict'

class Player {
  constructor(name, stayValue = 17) {
    this.stayValue = stayValue
    this.name = name
    this.cards = []
  }

  getCard(c) {
    this.cards.push(c)
  }

  wantMoreCards() {
    return this.calcScore() < this.stayValue
  }

  calcScore() {
    let score = this.cards.reduce((a, b) => a + b.value, 0)

    if (score > 21)
      this.cards.forEach(card => {
        if (card.label === 'A' && score > 21) score -= 13
      })

    return score
  }

  toString() {
    return `${this.name.padEnd(8)}: ${this.cards.length !== 0
      ? this.cards.map(c => `${c.suit} ${c.label}`).join(', ')
      : '-'} (${this.calcScore()})`
  }
}

module.exports = Player