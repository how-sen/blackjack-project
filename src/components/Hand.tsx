import React from 'react';
import HandType from '../interfaces/Hand'
import Card from './Card'

interface HandProps {
    hand: HandType;
}

const Hand = ({ hand }: HandProps) => {
    return (
        <div>
        {hand.cards.map((card) => (
            <Card key={card.code} card={card} />
        ))}
        </div>
    );
};

export default Hand;
