import React, { useState, useEffect } from "react";
import '../../styles/index.css'


const Juego = ({turno, setTurno, nombreJugador1, nombreJugador2, simboloJugador1, simboloJugador2}) => {


  const combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const [gameOver, setGameOver] = useState(false)
  const tableroBase = [
    "", "", "",
    "", "", "",
    "", "", ""

  ]
  const [tablero, setTablero] = useState(tableroBase)

  const handlerClickBoton =()=>{
    setTablero(tableroBase)
    setGameOver(false)
    setTurno(true)
  }

  const handlerChange = () => {
    if (gameOver) return;
    for (let i = 0; i < combinaciones.length; i++) {
      let contadorX = 0;
      let contadorO = 0;
      for (let j = 0; j < combinaciones[i].length; j++) {
        if (tablero[combinaciones[i][j]] === "X") {
          contadorX++
        } else if (tablero[combinaciones[i][j]] === "O") {
          contadorO++
        }
      }
      if (contadorX === 3) {
        alert("X gana");
        setGameOver(prev => !prev)
      } else if (contadorO === 3) {
        alert("O gana");
        setGameOver(prev => !prev)
      }
    }


  }

  const handlerClickCelda = (index) => {
    if (gameOver) return;

    const copTablero = [...tablero]
    if (copTablero[index] === "") {
      if (turno) {
          copTablero[index] = simboloJugador1
        setTablero(copTablero)
        setTurno(prev => !prev)
      } else {
        copTablero[index] = simboloJugador2
        setTablero(copTablero)
        setTurno(prev => !prev)
      }
    }
  }

  useEffect(() => {
    handlerChange()
  }, [tablero])




  return (
   
      <div className="d-flex flex-column justify-content-center align-items-center tam gap-5 ">
        {turno ? <h1>Turno de {nombreJugador1}</h1> : <h1>Turno de {nombreJugador2}</h1> }
        <div className="row container text-light ">
          {tablero.map((element, index) => {
            return (
              <div
                key={`cell-${index}`}
                className="col-4 border text-center d-flex justify-content-center align-items-center p-3 "
                onClick={() => handlerClickCelda(index)}
                style={{ minHeight: "200px", fontSize: "5rem" }}
              >
                {element}
              </div>)
          })}
        </div>
        <button onClick={handlerClickBoton} type="button" className="btn btn-primary">Reset</button>
      </div>
  )
};


export default Juego;