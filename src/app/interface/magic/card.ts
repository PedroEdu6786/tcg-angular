export interface Card {
    name: string;
    names: Array<{
        name: string;
    }>;
    manaCost: string;
    cmc: number;
    colors: Array<{
        color: string;
    }>;
    type: string;
    rarity: string;
    set: string;
    text: string;
    power: number;
    toughness: number;
    multiverseid: number;
    imageUrl: string;
    id: string;
}

export interface Card_Data {
    card:{
        name: string;
        manaCost: string;
        cmc: number;
        colors: Array<{
            color: string;
        }>;
        type: string;
        rarity: string;
        set: string;
        text: string;
        power: number;
        toughness: number;
        multiverseid: number;
        imageUrl: string;
        id: string;
        flavor: string
    }
}
