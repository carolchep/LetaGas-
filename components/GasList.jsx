import styles from "../styles/PizzaList.module.css";
import GasCard from "./GasCard";

const GasList = ({ gasList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE SWEETEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Leta Gas takes off the heavy lifting of your gas ordering process.
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