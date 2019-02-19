import { Agency } from '@/models/Agency'
import Outcome from '@/models/Outcome'
import {Deck} from '@/models/Deck'
import {Component, AvailableComponents} from '@/models/Component'

expect.extend({
  toBeComponent(input, expected){
    return {
      pass: input && input.name === expected,
      message: input ? 'Got component ' + input.name + '. Expected component is ' + expected : 'Component was undefined or null'
    };
  } 
});

describe('Agency', () => {
  let agency;

  beforeEach(() => {
    agency = new Agency('NASA');
  });

  it('should have a name', () => {
    expect(agency.name).toEqual('NASA');
  });

  it('should start with no technologies', () => {
    expect(agency.techs).toEqual([]);
  });

  describe('addTech', () => {
    it('should create a component and add it to the agency', () => {
      let deck = new Deck([Outcome.SUCCESS, Outcome.MINOR, Outcome.MAJOR]);
      agency.addTech(AvailableComponents.JUNO, deck);
      expect(agency.techs[0]).toBeComponent(AvailableComponents.JUNO);
    });
  });
});
