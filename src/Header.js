import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component{
  
  render() {
    return (
      <header>
        <div className="menu-bar-pc">
          <nav className="menu-principal">
            <div className="puntaje">Pts: <br></br>{this.props.puntaje}
            </div>
            <div className="circularProgres"></div>
            <div className="intentos">
              
                <div className="numero">{this.props.numeroDeIntentos}</div>
                <i id="heart" className="fas fa-heart"></i>
              
            </div>
          <div className="power">
                 {this.props.power}
          <i className="fas fa-apple-alt powerUp1" onClick={this.props.powered}></i>
          <i className="fas fa-apple-alt powerUp2" onClick={this.props.powered}></i>
          <i className="fas fa-apple-alt powerUp" onClick={this.props.powered}></i>
          
          <i className="fas fa-pepper-hot powerUpc2"></i>
          <i className="fas fa-pepper-hot powerUpc1"></i>
          <i className="fas fa-pepper-hot powerUpc" alt="Suma puntos para activar el potenciador"></i>

          <i className="fas fa-carrot powerUpz2"></i>
          <i className="fas fa-carrot powerUpz1"></i>
          <i className="fas fa-carrot powerUpz"></i>
            {/* <div className="circularProgres"></div> */}
            </div>
            </nav>
          </div>
          
      </header>
    );
  }
};