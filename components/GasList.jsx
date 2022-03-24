import styles from "../styles/PizzaList.module.css";
import GasCard from "./GasCard";

const GasList = ({ gasList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE SWEETEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Leta Pizza makes sure you get your pizza in time and fresh.Enjoy with friends and  family and be on the lookout for our generous offers.
      </p>
      <div className={styles.wrapper}>
        {gasList.map((pizza) => (
          <GasCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;