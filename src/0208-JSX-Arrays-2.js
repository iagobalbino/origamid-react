// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];
// consegui colocar os objetos e o array de cores na tela
const App = () => {
  const produtosFiltrados = produtos.filter((produto) => parseInt(produto.preco.replace('R$ ', '')) > 1500);
  console.log(produtosFiltrados);

  return <div>
    {
      produtosFiltrados.map((produto) =>
        <div>
          <h1>{produto.nome}</h1>
          <p>Preço: {produto.preco}</p>
          <ul>
            {produto.cores.map((cor) => <li style={{ backgroundColor: cor, color: '#fff' }}>{cor}</li>)}
          </ul>
        </div>
      )
    }
  </div>;
};

export default App;