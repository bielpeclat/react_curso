import styles from './Pessoa.module.css';

function Pessoa ({nome, foto, idade, profissao}) {

  return (
    <div className={styles.pessoa}>
      <img src={foto} alt={nome}/>
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
  
}

export default Pessoa