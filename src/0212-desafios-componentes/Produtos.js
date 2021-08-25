import React from 'react';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <div>
      <p>{produtos.nome}</p>
      <ul>
        {produtos.map((produto) => produto.propriedades.map((propriedade) => <li>{propriedade}</li>))}
      </ul>
    </div>
  );
};

export default Produtos;