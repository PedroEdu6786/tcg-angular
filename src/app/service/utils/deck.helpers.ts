import { DeckType } from './deckTypes';
import { buildQueryParams } from './helpers';

const pageSize = 40;

const POKEMON_API = `https://api.pokemontcg.io/v2/cards`;
const MAGIC_API = `https://api.magicthegathering.io/v1/cards`;
const YUGIOH_API = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;

export const deckURI = {
  Pokemon: POKEMON_API,
  Yugioh: YUGIOH_API,
  Magic: MAGIC_API,
};

export const getApiURI = (card: DeckType, page: number) => {
  let params = '';

  if (card === DeckType.Yugioh) {
    params = buildQueryParams({
      num: pageSize,
      offset: (page - 1) * 16,
    });
  } else {
    params = buildQueryParams({
      pageSize: pageSize,
      page: page,
    });
  }

  return `${deckURI[card]}?${params}`;
};

const searchParamApi = {
  Pokemon: 'q',
  Yugioh: 'fname',
  Magic: 'name',
};

export const getApiSearchURI = (card: DeckType, search: string) => {
  let params = '';

  //   switch (card) {
  //     case DeckType.Yugioh:
  //       params = buildQueryParams({
  //         fname: search,
  //       });
  //       break;

  //     case DeckType.Magic:
  //       params = buildQueryParams({
  //         name: search,
  //       });
  //       break;

  //     case DeckType.Pokemon:
  //       params = buildQueryParams({
  //         q: `name:${search}`,
  //       });
  //       break;
  //   }

  let paramSearch = searchParamApi[card];

  if (card !== DeckType.Pokemon) {
    params = buildQueryParams({
      [paramSearch]: search,
    });
  } else {
    params = buildQueryParams({
      q: `name:${search}`,
    });
  }

  return `${deckURI[card]}?${params}`;
};
