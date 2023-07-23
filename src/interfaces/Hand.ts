import Card from "./Card";

export default interface Hand {
    cards: Card[];
    value: number;
}