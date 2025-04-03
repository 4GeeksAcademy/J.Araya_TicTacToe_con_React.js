import { useState } from 'react';

const Jugador = (initialNombre = '', initialSimbolo = '') => {
  const [nombre, setNombre] = useState(initialNombre);
  const [simbolo, setSimbolo] = useState(initialSimbolo);

  return { nombre, setNombre, simbolo, setSimbolo };
};

export default Jugador;
