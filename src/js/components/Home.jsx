import React, { useState } from "react";


//include images into your bundle
import Input from "./Input";
import Card from "./Card";
import Jugador from "./Jugador";
import Juego from "./Juego";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from '@fortawesome/free-regular-svg-icons';



//create your first component
const Home = () => {

	const [turno, setTurno] = useState(true)
	const [pasoAlJuego, setPasoAlJuego] = useState(false)


	const jugador1 = Jugador()
	const jugador2 = Jugador()

	const handlerChangeJugadorUno = (e) => {
		jugador1.setNombre(e.target.value)
	}
	const handlerChangeJugadorDos = (e) => {
		jugador2.setNombre(e.target.value)
	}
	const handlerClickEquis = () => {
		jugador1.setSimbolo("X")
		jugador2.setSimbolo("O")
		setTurno(true)
	}
	const handlerClickCirculo = () => {
		jugador1.setSimbolo("O")
		jugador2.setSimbolo("X")
		setTurno(false)
	}

	const equis = <Card onClick={handlerClickEquis} faType={<FontAwesomeIcon icon={faX} size="5x" />} />
	const circulo = <Card onClick={handlerClickCirculo} faType={<FontAwesomeIcon icon={faCircle} size="5x" />} />

	return (
		<div className="d-flex justify-content-center tam flex-column text-center text-white colorEnPrincipal">

			{!pasoAlJuego && (
				<div>
					<h1>Tic Tac Toe in React.js</h1>
					<h2>Pick a Weapon</h2>
					{jugador1.nombre !== "" && jugador2.nombre !== "" && (
						<div><h1>Escoga un símbolo</h1></div>
					)}
					{jugador1.simbolo !== "" && jugador1.nombre !== "" && jugador2.nombre !== "" && (
						setPasoAlJuego(prev=>!prev)
					)}
					<div className="d-flex justify-content-center align-items-center col">
						<div className="d-flex justify-content-center align-items-center flex-column gap-3  col m-2 p-3">
							<div><h1><strong>Choose ur weapon</strong></h1></div>
							<div className="d-flex flex-row gap-3">
								<Input placeHolder={"jugador 1"} onChange={handlerChangeJugadorUno} id={"jugador1"} />
								<Input placeHolder={"jugador 2"} onChange={handlerChangeJugadorDos} id={"jugador2"} />
							</div>
							<div className="d-flex gap-3">
								{equis}
								{circulo}

							</div>
						</div>

					</div>
				</div>
			)}

			{pasoAlJuego && (
				<Juego turno={turno} setTurno={setTurno} nombreJugador1={jugador1.nombre} nombreJugador2={jugador2.nombre}
					simboloJugador1={jugador1.simbolo} simboloJugador2={jugador2.simbolo} />
			)}

		</div>
	);
};


export default Home;