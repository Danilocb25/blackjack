/**
 * 
 * @param {Array<String>} deck 
 * @returns {string} retorna la carta del deck
 */


export const pedirCarta = ( deck ) => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    return deck.pop();
  };
