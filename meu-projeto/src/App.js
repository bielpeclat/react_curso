import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      <SayMyName nome="Gabriel"/>
      <Pessoa nome="Gabriel" idade="20" profissao="estudante" foto="https://placehold.co/150"/>
    </div>
  );
}

export default App;
