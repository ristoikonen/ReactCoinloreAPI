import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CoinTicker from './CoinTicker';

describe('<CoinTicker />', () => {
  test('it should mount', () => {
    render(<CoinTicker />);

    const coinTicker = screen.getByTestId('CoinTicker');

    expect(coinTicker).toBeInTheDocument();
  });
});