import React, { Component } from "react";
import "./Carta.css";
import ReactCardFlip from "react-card-flip";
// import {numeros} from './utils/fontAwesome'

export default class Carta extends Component {
	render() {
		return (
			<div className="tarjeta-wrap" onClick={this.props.seleccionarCarta}>
				<ReactCardFlip
					className="tarjeta"
					isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
					disable={true}
				>
					<div className="adelante"></div>

					<div className="atras">
						{/* {console.log(numeros)} */}
						<i id="card" className={` fa ${this.props.icono} `}></i>
						<div id="atr">{this.props.numero}</div>

						<i id="iconMagic" className={` fa ${this.props.icon} fa-3x`}>
							{" "}
						</i>
					</div>
				</ReactCardFlip>
			</div>
		);
	}
}
