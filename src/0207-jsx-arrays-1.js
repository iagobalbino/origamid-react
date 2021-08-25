// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;
  const precos = dados.compras.map((dados) => Number(dados.preco.replace('R$ ', '')));
  const total = precos.reduce((accumulator, currentValue) => accumulator + currentValue);

  return <div>
    <p>Nome: {dados.cliente}</p>
    <p>Idade: {dados.idade}</p>
    <p>Situação: {dados.ativa ? <span style={{ color: 'green' }}>Ativa</span> : <span style={{ color: 'red' }}>Inativa</span>}</p>
    <p>Total gasto: R$ {total}</p>
    <p>{total > 10000 ? 'Você está gastando muito.' : ''}</p>
  </div>;
};

export default App;
