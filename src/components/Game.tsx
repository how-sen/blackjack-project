import React, { useState } from 'react';
import Hand from './Hand';
import HandType from '../interfaces/Hand';
import { useDeck } from '../hooks/useDeck';
import { calculateHandValue } from '../utils';

const Game = () => {
    const { drawCards, drawInitialCards } = useDeck();
    const [playerHand, setPlayerHand] = useState<HandType>({ cards: [], value: 0 });
    const [houseHand, setHouseHand] = useState<HandType>({ cards: [], value: 0 });
    const [gameOver, setGameOver] = useState(false);
    const [result, setResult] = useState('');

    const startGame = async() => {
        setGameOver(false);
        setResult('')
        const cards = await drawInitialCards();
        if (!cards) return;
        const playerCards = cards.slice(0, 2);
        const houseCards = cards.slice(2, 4);
        setPlayerHand({cards: playerCards, value: calculateHandValue(playerCards)});
        setHouseHand({cards: houseCards, value: calculateHandValue(houseCards)});
    };

    const hit = async() => {
        const card = await drawCards(1);
        if (!card) return;
        const newPlayerCards = [...playerHand.cards, ...card];
        const newPlayerHandValue = calculateHandValue(newPlayerCards);
        setPlayerHand({cards: newPlayerCards, value: newPlayerHandValue});

        if (newPlayerHandValue > 21) {
            setGameOver(true);
            setResult('You Lose');
        }
    };

    const stand = () => {
        if (playerHand.value > houseHand.value || houseHand.value > 21) {
            setGameOver(true);
            setResult('You Win');
        } else{
            setGameOver(true);
            setResult('You Lose');
        }
    };

    return (
        <div>
        <button onClick={startGame}>Start Game</button>
        <h2>House</h2>
        <Hand hand={houseHand} />
        <h2>Player</h2>
        <Hand hand={playerHand} />
        {!gameOver && (
            <div>
                <button onClick={hit}>Hit</button>
                <button onClick={stand}>Stand</button>
            </div>
        )}
        {gameOver && <h3>{result}</h3>}
        </div>
    );
};

export default Game;
