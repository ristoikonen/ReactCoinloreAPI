import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders api.coinlore.net text', () => {
  render(<App />);
  const linkElement = screen.getByText(/api.coinlore.net/i);
  expect(linkElement).toBeInTheDocument();
});
