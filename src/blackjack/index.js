import { crearDeck, insertaImagen, pedirCarta, valorCarta } from "./usecases";


  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];


  let puntosJugadores = [];

  const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');

  export const divCartasJugadores = document.querySelectorAll('.divCartas');
  const puntosSmall = document.querySelectorAll('small');

  const inicializarJuego = ( numJugadores = 2) => {

    deck = crearDeck(tipos, especiales);
    puntosJugadores= [];

    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosSmall.forEach( elem => elem.innerText = 0 );
    // puntosSmall[0].innerText = 0;
    // puntosSmall[1].innerText = 0;
    divCartasJugadores.forEach( elem => elem.innerHTML = '');
    // divCartasComputadora.innerHTML = "";
    // divCartasJugador.innerHTML = "";

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };


  //turno: 0 = primero ... ultimo: la pc
  const acumularPuntos = ( carta, turno ) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosSmall[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
  };

  // const insertaImagen = (carta, turno) => {
  //   const imgCarta = document.createElement('img');
  //   imgCarta.src = `assets/cartas/${carta}.png`;
  //   imgCarta.classList.add('carta');
  //   divCartasJugadores[turno].append(imgCarta);
  // };

  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie Gana");
      } else if (puntosMinimos > 21) {
        alert("Computadora Gana");
      } else if (puntosComputadora > 21) {
        alert("Jugador Gana");
      } else {
        alert("Computadora Gana");
      }
    }, 30);
  };

  const turnoComputadora = ( puntosMinimos ) => {

    let puntosComputadora = 0;
    
    do {
      const carta = pedirCarta(deck);
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length -1);
      insertaImagen( carta, puntosJugadores.length -1, divCartasJugadores[1]);

    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0);

    insertaImagen(carta, 0, divCartasJugadores[0]);

    if (puntosJugador > 21) {
      console.warn("Perdio puto");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugador );
    } else if ( puntosJugador === 21 ) {
      console.warn("hiciste 21 perro");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugador );
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugadores[0] );
  });

  btnNuevo.addEventListener("click", () => {

    inicializarJuego();
  });

 

