import Card from '../interfaces/Card';

export function calculateHandValue(hand: Card[]): number {
    let value = 0;
    let aceCount = 0;

    for (const card of hand) {
        if (card.value === 'ACE'){
            aceCount++;
            value += 11;
        } else if (['KING', 'QUEEN', 'JACK'].includes(card.value)){
            value += 10;
        } else {
            value += parseInt(card.value, 10);
        }
        while (value > 21 && aceCount > 0) {
            value -= 10;
            aceCount--;
        }
    }

    return value;
}