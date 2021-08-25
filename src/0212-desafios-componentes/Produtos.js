import React from 'react';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {

  return (
    <div>
      <h2>Produtos</h2>
      {produtos.map((produto) =>
        <div style={{ border: 'black solid 1px', marginBottom: '10px', padding: '10px' }}>
          <p>{produto.nome}</p>
          <ul>
            {produto.propriedades.map((props) => <li>{props}</li>)}
          </ul>
        </div>)}
    </div>
  );
};

export default Produtos;