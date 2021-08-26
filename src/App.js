import React from 'react';
import Header from './0212-desafios-componentes/Header';
import Home from './0212-desafios-componentes/Home';
import Produtos from './0212-desafios-componentes/Produtos';


const App = () => {
  const { pathname } = window.location;
  let Pagina = Produtos;

  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};

export default App;