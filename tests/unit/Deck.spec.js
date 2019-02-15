import {Deck, OutcomeDeck} from '@/models/Deck'
import Outcome from '@/models/Outcome'

describe('OutcomeDeck', () => {
  let getCards = (cardToFind) => OutcomeDeck.cards.filter((card) => card === cardToFind);

  it('should have 90 cards', () => {
    expect(OutcomeDeck.length()).toBe(90);
  });
  it('should have 60 success cards', () => {
    expect(getCards(Outcome.SUCCESS).length).toBe(60);
  });
  it('should have 15 minor failures', () => {
    expect(getCards(Outcome.MINOR).length).toBe(15);
  });
  it('should have 15 major failures', () => {
    expect(getCards(Outcome.MAJOR).length).toBe(15);
  });
});

describe('Deck', () => {
  let deck;
  
  beforeEach(() => {
    deck = new Deck();
  });
  
  it('should initially be empty', () => {
    expect(deck.length()).toBe(0);
  });
  
  it('can be initialised with an array of cards', () => {
    deck = new Deck([Outcome.SUCCESS, Outcome.MINOR, Outcome.MAJOR]);
    expect(deck.length()).toBe(3);
    expect(deck.cards[0]).toBe(Outcome.SUCCESS);
    expect(deck.cards[1]).toBe(Outcome.MINOR);
    expect(deck.cards[2]).toBe(Outcome.MAJOR);
  });

  describe('addCard', () => {
    beforeEach(() => {
      deck.addCard(Outcome.SUCCESS);
    });
    
    it('should increase deck size by one', () => {
      expect(deck.length()).toBe(1);
    });
    
    it('should have the new card in the deck', () => {
      expect(deck.cards).toContain(Outcome.SUCCESS);
    });
    
    it('should be able to add cards of the same type', () => {
      deck.addCard(Outcome.SUCCESS);
      expect(deck.length()).toBe(2);    
    });
  });

  describe('shuffle', () => {
    it('should evenly shuffle a deck', () => {
      let createKey = (deck) => deck.cards.reduce((state, card) => state+card, "");
      let possibleDecks = [
        new Deck([Outcome.SUCCESS, Outcome.MINOR, Outcome.MAJOR]),
        new Deck([Outcome.SUCCESS, Outcome.MAJOR, Outcome.MINOR]),
        new Deck([Outcome.MINOR, Outcome.SUCCESS, Outcome.MAJOR]),
        new Deck([Outcome.MINOR, Outcome.MAJOR, Outcome.SUCCESS]),
        new Deck([Outcome.MAJOR, Outcome.SUCCESS, Outcome.MINOR]),
        new Deck([Outcome.MAJOR, Outcome.MINOR, Outcome.SUCCESS])
      ];
      let shuffleCounts = {};
      possibleDecks.forEach((deck) => shuffleCounts[createKey(deck)] = 0);
      
      const ITERATIONS = 1200000;
      let deck = new Deck([Outcome.SUCCESS, Outcome.MINOR, Outcome.MAJOR]);
      for(let i=0; i<ITERATIONS; i++) {
        let newDeck = deck.shuffle();
        shuffleCounts[createKey(newDeck)]++;
      }
      
      let distribution = possibleDecks.map((deck) => shuffleCounts[createKey(deck)] / ITERATIONS);
      let expected = 1/possibleDecks.length;
      distribution.forEach((dist) => expect(dist).toBeCloseTo(expected, 2));
    });
  });

  describe('draw', () => {
    let deck;

    beforeEach(() => {
      deck = new Deck([Outcome.SUCCESS, Outcome.MINOR, Outcome.MAJOR]);
    });
    
    it('should return the top of the deck', () => {
      let card = deck.draw();
      expect(card).toBe(Outcome.MAJOR);
    });
    
    it('should remove the returned card from the deck', () => {
      let card = deck.draw();
      expect(deck.length()).toBe(2);
      expect(deck.cards).toContain(Outcome.SUCCESS);
      expect(deck.cards).toContain(Outcome.MINOR);
      expect(deck.cards).not.toContain(Outcome.MAJOR);
    });
  });

});
