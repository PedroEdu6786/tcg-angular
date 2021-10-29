export interface Card_Data {
  data: {
    id: string;
    name: string;
    supertype: string;
    subtypes: Array<{
      subtype: string;
    }>;
    level: number;
    hp: number;
    types: Array<{
      type: string;
    }>;
    evolvesFrom:string;
    abilities: Array<{
      name: string;
      text: string;
    }>;
    attacks: Array<{
      name: string;
      cost: Array<{
        cost: string;
      }>;
      convertedEnergyCost: number;
      damage: string;
      text: string;
    }>;
    weaknesses: Array<{
      type: string;
      value: string;
    }>;
    resistances: Array<{
      type: string;
      value: string;
    }>;
    set: {
      id: string;
      name: string;
      series: string;
      printedTotal: number;
      total: number;
      legalities: {
        unlimited: string;
      };
      ptcgoCode: string;
      releaseDate: string;
      updatedAt: string;
      images: {
        symbol: string;
        logo: string;
      };
    };
    number: number;
    artist: string;
    rarity: string;
    nationalPokedexNumbers: Array<{
      pokedexNumber: number;
    }>;
    legalities: {
      unlimited: string;
    };
    images: {
      small: string;
      large: string;
    };
  }
}

export interface Card {
    id: string;
    name: string;
    supertype: string;
    subtypes: Array<{
      subtype: string;
    }>;
    level: number;
    hp: number;
    types: Array<{
      type: string;
    }>;
    legalities: {
      unlimited: string;
    };
    images: {
      small: string;
      large: string;
    };
  }
