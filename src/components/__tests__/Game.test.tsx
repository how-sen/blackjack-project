import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { useDeck } from '../../hooks/useDeck';
import Game from '../Game';

jest.mock('../../hooks/useDeck', () => ({
  useDeck: () => ({
    drawCards: mockDrawCards,
    drawInitialCards: mockDrawInitialCards,
  }),
}));

const mockedUseDeck = useDeck as jest.MockedFunction<typeof useDeck>;

const mockDrawInitialCards = jest.fn(async () => [
  { image: '', value: '10', suit: 'HEARTS', code: '' },
  { image: '', value: '9', suit: 'DIAMONDS', code: '' },
  { image: '', value: '7', suit: 'SPADES', code: '' },
  { image: '', value: '8', suit: 'CLUBS', code: '' },
]);

const mockDrawCards = jest.fn(async () => [
  { image: '', value: '2', suit: 'HEARTS', code: '' },
]);

describe('Game', () => {
  beforeEach(() => {
    render(<Game />);
  });

  it('renders start game button', () => {
    expect(screen.getByText('Start Game')).toBeInTheDocument();
  });

  it('starts a game and displays initial hands', async () => {
    fireEvent.click(screen.getByText('Start Game'));

    await waitFor(() => {
      expect(screen.getByText('House')).toBeInTheDocument();
      expect(screen.getByText('Player')).toBeInTheDocument();
    });
  });

  it('player can hit and draw a card', async () => {
    fireEvent.click(screen.getByText('Start Game'));

    await waitFor(() => {
      fireEvent.click(screen.getByText('Hit'));
    });

    await waitFor(() => {
      expect(mockDrawCards).toHaveBeenCalled();
    });
  });

  it('player can stand and see the game result', async () => {
    fireEvent.click(screen.getByText('Start Game'));

    await waitFor(() => {
      fireEvent.click(screen.getByText('Stand'));
    });

    await waitFor(() => {
      expect(screen.getByText('You Lose')).toBeInTheDocument();
    });
  });
});
