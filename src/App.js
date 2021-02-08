import Tablero from "./Tablero";
import Header from "./Header";
import Botonera from "./Botonera";

import "./App.css";
import construirBaraja from "./utils/construirBaraja";
import { Component } from "react";

let getEstadoInicial = () => {
	const baraja = construirBaraja();

	return {
		baraja,
		parejaSeleccionada: [],
		estaComparando: false,
		puntaje: 100,
		numeroDeIntentos: 15,
	};
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = getEstadoInicial();
	}
	render() {
		return (
			<div className="App">
				<Header
					puntaje={this.state.puntaje}
					numeroDeIntentos={this.state.numeroDeIntentos}
					power={this.state.power}
				/>

				<Botonera
					resetearPartida={() => this.resetearPartida()}
					agregar={() => this.agregarJugador()}
				/>

				<Tablero
					baraja={this.state.baraja}
					parejaSeleccionada={this.state.parejaSeleccionada}
					seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
				/>
			</div>
		);
	}
	////////////////////////////////////////////////////
	seleccionarCarta(carta) {
		if (
			this.state.estaComparando ||
			this.state.parejaSeleccionada.indexOf(carta) > -1 ||
			carta.fueAdivinada
		) {
			return;
		}
		const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
		this.setState({
			parejaSeleccionada,
		});
		if (parejaSeleccionada.length === 2) {
			this.compararPareja(parejaSeleccionada);
		}
	}

	/////////////////////COMPARAR PAREJAS//////////////////////////////
	compararPareja(parejaSeleccionada) {
		this.setState({ estaComparando: true });
		setTimeout(() => {
			const [primeraCarta, segundaCarta] = parejaSeleccionada;
			////////////////////////CARTAS ESPECIALES///////////////////////
			let baraja = this.state.baraja;
			let pC = primeraCarta.icon;
			let sC = segundaCarta.icon;
			
			if (pC !== sC) {
				this.setState({
					puntaje: this.state.puntaje - 7,
					numeroDeIntentos: this.state.numeroDeIntentos - 1,
				});
			}

			if (pC === sC) {
				this.setState({ puntaje: this.state.puntaje + 5 });
			}
			
			
			this.verificarGanador(baraja);

			this.setState({
				baraja,
				parejaSeleccionada: [],
				estaComparando: false,
				puntaje: this.state.puntaje,
				numeroDeIntentos: this.state.numeroDeIntentos,
				fueAdivinada: true,
				power: this.state.power,
			});
		}, 1000);
	}

	//////////////////////GANADOR//////////////////////////////
	verificarGanador(baraja) {
		//baraja.forEach((carta) => carta.fueAdivinada = true);

		////////////////////////////////////////////////////////////
		if (baraja.filter((carta) => !carta.fueAdivinada).length === 4) {
			alert("ya casi!");
		}
		/////////////////////////////////////////////////////////////
		if (this.state.numeroDeIntentos === 0) {
			alert(
				`Te quedaste sin intentos! tus puntos fueron de ${this.state.puntaje},pulsa resetar partida`
			);
			this.resetearPartida();
		}
		if (baraja.filter((carta) => !carta.fueAdivinada).length === 0) {
			alert(
				`terminaste con ${this.state.puntaje} puntos! y ${this.state.numeroDeIntentos} intentos`
			);
		}
	}

	resetearPartida() {
		this.setState(getEstadoInicial());
	}
}

export default App;
