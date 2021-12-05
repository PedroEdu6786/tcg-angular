export class SearchCardModel {
  /**
   * Search card constructor model
   * @constructor
   * @param {string} cardName - Name of card
   * @param {string} game - Name of card game
   */
  constructor(public cardName: string, public game?: string) {}
}
