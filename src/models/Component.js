import { Deck } from '@/models/Deck'

export default class Component {
  constructor (name, deck) {
    this.name = name
    if (name === AvailableComponents.SURVEYING) {
      this.deck = new Deck([deck.draw()])
    } else {
      this.deck = new Deck([deck.draw(), deck.draw(), deck.draw()])
    }
  }
}

let AvailableComponents = {
  JUNO: 'Juno',
  ATLAS: 'Atlas',
  SOYUZ: 'Soyuz',
  SATURN: 'Saturn',
  ION: 'Ion Thruster',
  SURVEYING: 'Surveying',
  REENTRY: 'Re-Entry',
  LANDING: 'Landing',
  RENDEZVOUS: 'Rendezvous',
  LIFESUPPORT: 'Life Support'
}

export { Component, AvailableComponents }
