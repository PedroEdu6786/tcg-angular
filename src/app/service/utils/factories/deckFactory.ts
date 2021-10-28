import { Deck, DeckType } from '../deckTypes';

export const deckFactory = (cards: any, deckType: DeckType): Deck => {
  let cardData;
  switch (deckType) {
    case DeckType.Pokemon:
      cardData = cards.data.map((card: any) => ({
        ...card,
        name: card.name,
        desc: card.rarity,
        img: card.images.small,
      }));
      break;

    case DeckType.Yugioh:
      cardData = cards.data.map((card: any) => ({
        ...card,
        img: card.card_images[0].image_url,
      }));
      break;

    case DeckType.Magic:
      cardData = cards.cards.map((card: any) => ({
        ...card,
        desc: card.text,
        img: card.imageUrl,
      }));
      break;
  }

  return {
    data: [...cardData],
  };
};
