import { getByText, render, screen } from '@testing-library/react';
import React from 'react';
import Pokedex from './Pokedex';
import { fireEvent } from '@testing-library/react';

test('restricts input of pokemon to to 1 - 151', () => {
  render(<Pokedex />);
  const button = screen.getByText('I Choose You')
  const input = screen.getByLabelText('Choose Your Pokemon')
  fireEvent.change(input, {target: {value: '152152'}})
  fireEvent.click(button)
  const linkElement = screen.getByText(/Please choose a pokemon with an id 1 - 151/i);
  //const linkElement = screen.getByText(/bulbasaur/i);
  expect(linkElement).toBeInTheDocument();
});
