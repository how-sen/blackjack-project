import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  it('renders the card with correct image and alt text', () => {
    const testCard = {
      image: 'www.test.com',
      value: '2',
      suit: 'HEARTS',
      code: '2H',
    };

    render(<Card card={testCard} />);

    const cardImage = screen.getByRole('img');
    expect(cardImage).toHaveAttribute('src', testCard.image);
    expect(cardImage).toHaveAttribute('alt', `${testCard.value} of ${testCard.suit}`);
  });
});
