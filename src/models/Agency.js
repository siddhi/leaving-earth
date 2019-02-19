import { Component } from '@/models/Component'

class Agency {
  constructor (name) {
    this.name = name
    this.techs = []
  }

  addTech (name, deck) {
    this.techs.push(new Component(name, deck))
  }
}

const AvailableAgencies = {
  USA: new Agency('USA'),
  FRANCE: new Agency('FRANCE'),
  USSR: new Agency('USSR'),
  CHINA: new Agency('CHINA'),
  JAPAN: new Agency('JAPAN')
}

export { AvailableAgencies, Agency }
