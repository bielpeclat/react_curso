import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'Gabriel'
  const newName = name.toUpperCase();

  const sum = (a,b) => a + b;

  const url = 'https://placehold.co/250';
  
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(3,6)}</p>
      <img alt="Minha imagem" src={url}></img>
      <HelloWorld />
    </div>
  );
}

export default App;
