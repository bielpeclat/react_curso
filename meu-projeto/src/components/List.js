import styles from './List.module.css';
import Item from './Item.js';

function List () {

   return (
      <div className={styles.listContainer}> 
         <h1 className={styles. titulo}>Minha lista</h1>
         <ul className={styles.ulContainer}>
            <Item cor="Red"/>
            <Item cor="Green" />
            <Item cor="Blue" />
         </ul>
      </div>
   );
   
}

export default List