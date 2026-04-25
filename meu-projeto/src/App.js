import './App.css';
import Pessoa from './components/Pessoa';
import List from './components/List.js';

function App() {

  return (
    <div className="App">
      <Pessoa nome="Gabriel" idade="20" profissao="Estudante" foto="https://placehold.co/150"/>
      <List />
    </div>
  );
}

export default App;

// testando configuração de segundo portátil
