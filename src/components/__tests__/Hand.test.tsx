import React from 'react';
import { render } from '@testing-library/react';
import Hand from '../Hand';
import HandType from '../../interfaces/Hand';

describe('Hand', () => {
  it('renders the correct number of Card components', () => {
    const testHand: HandType = {
      cards: [
        { image: '', value: '10', suit: 'HEARTS', code: '0H' },
        { image: '', value: '9', suit: 'DIAMONDS', code: '0D' },
      ],
      value: 19,
    };

    const { getAllByRole } = render(<Hand hand={testHand} />);
    const cards = getAllByRole('img');
    expect(cards.length).toBe(2);
  });
});
