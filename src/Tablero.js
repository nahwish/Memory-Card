import React, { Component } from 'react';
import './Tablero.css';
import Carta from './Carta.js'

export default class Tablero extends Component{
  
  render() {
    
    
    
    return (
      <div className="tablero">
        
        {this.props.baraja.map((carta, index) => {
          const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(carta) > -1;
          return <Carta
            icono={carta.icono}
            estaSiendoComparada={estaSiendoComparada}
            key={index}
            seleccionarCarta={() => this.props.seleccionarCarta(carta)}
            fueAdivinada={carta.fueAdivinada}
            numero={carta.numero}
            icon={carta.icon}
          />
        })}
        
      </div>
    );
  }
};