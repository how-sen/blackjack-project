import axios from "axios";
import { useState } from "react";
import Card from "../interfaces/Card";

const DECK_API = 'https://deckofcardsapi.com/api/deck';

export function useDeck() {
    const [deckId, setDeckId] = useState<string | null>(null);

    async function drawInitialCards() {
        try {
        const res = await axios.get(`${DECK_API}/new/draw/?count=4`);
        setDeckId(res.data.deck_id);
        return res.data.cards;
        } catch(error) {
        console.error(error);
        return null;
        }
    }

    async function drawCards(count: number): Promise<Card[] | null> {
        if (!deckId) return null;

        try {
            const res = await axios.get(`${DECK_API}/${deckId}/draw/?count=${count}`);
            return res.data.cards;
        } catch(error) {
            console.error(error);
            return null;
        }
    }

    return { drawInitialCards, drawCards };
}