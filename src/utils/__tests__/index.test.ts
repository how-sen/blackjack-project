import { calculateHandValue } from '../';
import Card from '../../interfaces/Card';

describe('calculateHandValue', () => {
  it('should calculate the correct hand value', () => {
    const hand1: Card[] = [
      { image: '', value: '7', suit: 'HEARTS', code: '' },
      { image: '', value: '9', suit: 'DIAMONDS', code: '' },
    ];
    expect(calculateHandValue(hand1)).toBe(16);

    const hand2: Card[] = [
      { image: '', value: 'JACK', suit: 'SPADES', code: '' },
      { image: '', value: 'QUEEN', suit: 'CLUBS', code: '' },
    ];
    expect(calculateHandValue(hand2)).toBe(20);

    const hand3: Card[] = [
      { image: '', value: 'ACE', suit: 'HEARTS', code: '' },
      { image: '', value: '10', suit: 'DIAMONDS', code: '' },
    ];
    expect(calculateHandValue(hand3)).toBe(21);

    const hand4: Card[] = [
      { image: '', value: 'ACE', suit: 'HEARTS', code: '' },
      { image: '', value: '7', suit: 'DIAMONDS', code: '' },
      { image: '', value: '3', suit: 'SPADES', code: '' },
    ];
    expect(calculateHandValue(hand4)).toBe(21);
  });
});
