import React, { Component } from 'react';
import './Botonera.css';


export default class Botonera extends Component {
  render() {
   
   
    return (
      <nav className="navBar">
        <button className="boton-reiniciar" onClick={this.props.resetearPartida}
        
        >Reiniciar</button>
        {/* <button className="boton-agregar" onClick={this.props.agregarJugador}>Agregar Jugador</button> */}
        {/* <button className="boton-agregar">agregar <br></br>jugador</button> */}
        <div className="tab">
          
          
          
          
          
          
          
          
          
        </div>
      </nav>
    )
  }
}