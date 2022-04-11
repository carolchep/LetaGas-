import styles from "../styles/GasList.module.css";
import GasCard from "./GasCard";

const GasList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ORDER WITH US <span style={{color:"red",fontStyle:"oblique"}} >TODAY</span></h1>
      <p className={styles.desc}>
        Leta Gas takes off the heavy lifting of your gas ordering process.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <GasCard key={pizza._id} pizza={pizza} />
        ))}
      </div>

    </div>
  );
};

export default GasList;