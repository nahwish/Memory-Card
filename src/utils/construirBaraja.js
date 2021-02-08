import shuffle from 'lodash.shuffle';
import {icono,numeros,icon} from './fontAwesome';

const NUMERO_DE_CARTAS = 24;

export default function construirBaraja() {
  const fontAwesomeClases = icono();
  const num = numeros();
  const icon1 = icon() 
  let cartas = [];

  while (cartas.length < NUMERO_DE_CARTAS) {
    const index = Math.floor(Math.random() * fontAwesomeClases.length);
    const inde = Math.floor(Math.random()* num.length)
    const ind = Math.floor(Math.random() * icon1.length)
    const carta = {
      icono: fontAwesomeClases.splice(index, 1)[0],
      icon: icon1.splice(ind, 1)[0],
      fueAdivinada: false,
      numero: num.splice(inde,1)[0]
    };
  
    
    cartas.push({...carta});
    cartas.push(carta);
  }
  return shuffle(cartas);
}