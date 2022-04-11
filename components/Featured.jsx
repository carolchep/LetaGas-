import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";

import Link from "next/link";

const Featured = () => {
  const quantity = useSelector((state) => state.cart.quantity);


  return (
      <div className={styles.container}>
<div className={styles.nav}>
    <h2>LETAGAS.</h2>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</div>
          <div className={styles.content}>
        <h1>MAKE YOUR GAS ORDER WITH LETAGAS
        </h1>
<p>            Make your order and we deliver
</p>
              <div >
                  <button className={styles.button} ><span className={styles.span1}>LEARN MORE</span></button>
                  <button className={styles.button} > <span className={styles.span1}>MAKE ORDER</span></button>
              </div>
          </div>
      </div>
  );
};

export default Featured;