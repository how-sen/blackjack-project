import React from 'react';
import CardType from '../interfaces/Card';

interface CardProps {
    card: CardType
}

const Card = ({card}: CardProps) => {
    return <img src={card.image} alt={`${card.value} of ${card.suit}`} />;
}

export default Card;