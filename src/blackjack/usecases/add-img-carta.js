import { divCartasJugadores } from "..";

export const insertaImagen = ( carta, turno ) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `public/assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);

  };
  //./public/assets/cartas/${carta}.png