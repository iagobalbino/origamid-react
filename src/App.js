import React from 'react';
import Home from './0212-desafios-componentes/Home';
import Produtos from './0212-desafios-componentes/Produtos';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const App = () => {

  return (
    <div>
      <ul>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>Produtos</a>
        </li>
      </ul>

      <Home />
    </div >
  );
};

export default App;