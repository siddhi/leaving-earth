import {Component} from '@/models/Component'

export default class Agency {
  constructor(name) {
    this.name = name;
    this.techs = [];
  }

  addTech(name, deck) {
    this.techs.push(new Component(name, deck));
  }
}
