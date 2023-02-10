import {describe, expect, test} from '@jest/globals';
import { getPokemonById } from './fetchData';

let pokemon

describe('sum module', () => {
    beforeEach(async () => {
        pokemon = await getPokemonById(1);
    });
  test('you caught a bulbasaur', () => {
    expect(pokemon.name).toBe('bulbasaur')
  });
});