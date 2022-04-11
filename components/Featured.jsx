import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";

import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Featured = () => {
  const quantity = useSelector((state) => state.cart.quantity);


  return (
      <div className={styles.container}>
<div className={styles.nav}>
    <h2>LETA<span style={{color:"red"}}>GA<span style={{margin:"7px"}}>S.</span></span></h2>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</div>
          <div className={styles.content}>
        <h1>MAKE YOUR  ORDER WITH <span style={{color: "red"}}>LETAGAS</span>
        </h1 >
<p>            Make your order and we deliver
</p>
              <div >
                  <button className={styles.button} >LEARN MORE</button>
                  <button className={styles.button} > MAKE ORDER</button>
              </div>
          </div>

      </div>

  );
};

export default Featured;