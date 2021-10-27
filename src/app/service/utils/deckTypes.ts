export enum DeckType {
  Pokemon = 'Pokemon',
  Yugioh = 'Yugioh',
  Magic = 'Magic',
}

const pageSize = 10;
//page=10
const POKEMON_API = `https://api.pokemontcg.io/v2/cards?pageSize=${pageSize}`;
const MAGIC_API = `https://api.magicthegathering.io/v1/cards?pageSize=${pageSize}`;

//offset=(page-1)*16
const YUGIOH_API = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=${pageSize}`;

export const deckURI = {
  Pokemon: POKEMON_API,
  Yugioh: YUGIOH_API,
  Magic: MAGIC_API,
};

export const getApiURI = (card: DeckType, page: number) => {
  let params = '';

  if (card === 'Yugioh') {
    params = `&offset=(${page}-1)*16`;
  } else {
    params = `&page=${page}`;
  }

  return `${deckURI[card]}${params}`;
};
