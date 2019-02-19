import Outcome from './Outcome'

export default class Deck {
  constructor (initialCards) {
    this.cards = initialCards || []
  }

  length () {
    return this.cards.length
  }

  addCard (card) {
    this.cards.push(card)
  }

  draw () {
    return this.cards.pop()
  }

  shuffle () {
    // Fisher-Yates algorithm
    let deck = new Deck()
    let cards = [...this.cards]
    const ITERATIONS = cards.length
    for (let i = 0; i < ITERATIONS; i++) {
      let indexToChoose = Math.floor(Math.random() * cards.length)
      deck.addCard(cards[indexToChoose])
      cards.splice(indexToChoose, 1)
    }
    return deck
  }
}

function createOutcomeDeck () {
  let deck = new Deck()
  let addCards = (card, num) => {
    for (let i = 0; i < num; i++) {
      deck.addCard(card)
    }
  }
  addCards(Outcome.SUCCESS, 60)
  addCards(Outcome.MINOR, 15)
  addCards(Outcome.MAJOR, 15)
  return deck.shuffle()
}

const OutcomeDeck = createOutcomeDeck()

export { Deck, OutcomeDeck }
