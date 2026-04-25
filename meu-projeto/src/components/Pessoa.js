import styles from './Pessoa.module.css';

function Pessoa ({nome, foto, idade, profissao}) {
  return (
    <div className={styles.card}>
      <img src={foto} alt={nome} className={styles.imagem} />
      <h2 className={styles.nome}>{nome}</h2>
      <p className={styles.info}>Idade: {idade}</p>
      <p className={styles.info}>Profissão: {profissao}</p>
    </div>
  );
}

export default Pessoa;