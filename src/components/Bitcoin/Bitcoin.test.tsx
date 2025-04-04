import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Bitcoin from './Bitcoin';

describe('<Bitcoin />', () => {
  test('should have Bitcoin string when id is 90', async () => {
    const bitcoinRendered = render(<Bitcoin id='90'/>);
    const bitcoinString = await bitcoinRendered.findByText('Bitcoin', {exact: false});
    expect(bitcoinString).toBeInTheDocument();
  });
  
});