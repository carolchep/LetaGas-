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
        <h1>YOU ORDER WE DELIVER</h1>


      </div>
  );
};

export default Featured;