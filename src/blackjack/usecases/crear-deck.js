
import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tiposDeCarta  ej ["C", "D", "H", "S"]
 * @param {Array<string>} cartasEspeciales 
 * @returns {Array<string>} regresa una nueva baraja
 */

// esta funcion crea una nueva baraja
 export const crearDeck = ( tiposDeCarta, cartasEspeciales) => {

    if( !tiposDeCarta ) throw new Error('Tipos de carta obligatorio')

    let deck = [];

    for (let i = 2; i <= 10; i++) {
      for (let tipo of tiposDeCarta) {
        deck.push(i + tipo);
      }
    }

    for (let tipo of tiposDeCarta) {
      for (let esp of cartasEspeciales) {
        deck.push(esp + tipo);
      }
    }

    return _.shuffle(deck);
  };