import React, { useState } from 'react';

const Contador = () => {
  // Estado inicial do contador
  const [count, setCount] = useState(0);

  // Função para incrementar o contador
  const incrementarContador = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {count}</h1>
      <button onClick={incrementarContador}>
        Clique aqui
      </button>
    </div>
  );
};

export default Contador;
