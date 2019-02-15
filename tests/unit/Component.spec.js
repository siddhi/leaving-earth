import {Component, AvailableComponents} from '@/models/Component'
import {Deck} from '@/models/Deck'
import Outcome from '@/models/Outcome'

let deck = new Deck([Outcome.SUCCESS, Outcome.MINOR, Outcome.MAJOR]);

describe('Component', () => {
  let component;

  beforeEach(() => {
    component = new Component("Re-Entry", deck);
  });

  it('should have a name', () => {
    expect(component.name).toBe("Re-Entry");
  });

  it('should take the top cards of the outcome deck', () => {
    expect(component.deck.length()).toBe(3);
    expect(deck.length()).toBe(0);
  });
});

describe('AvailableComponents', () => {
  it('should have ten components', () => {
    expect(Object.keys(AvailableComponents).length).toBe(10);
  });

  it('should each have three outcomes (except surveying)', () => {
    Object.keys(AvailableComponents)
      .filter((component) => component !== "SURVEYING")
      .map((component) => new Component(component, deck))
      .forEach((component) => expect(component.deck.length()).toBe(3));
  });

  it('surveying should have one outcome', () => {
    let component = new Component(AvailableComponents.SURVEYING, deck);
    expect(component.deck.length()).toBe(1);
  });
});
