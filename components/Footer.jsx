import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/img25.jpg" objectFit="cover" layout="fill" alt="" style={{height:"100px"}}/>

        <div className={styles.texts}>
          <div className={styles.heading}>Contact us</div>

          <Image src="/img/.jpg" objectFit="cover" layout="fill" alt="" />

        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Contact Us
          </h2>
          <div className={styles.text}><span style={{fontWeight:"500"}}>+254 711 344 457</span></div>
        <div className={styles.logo2}><h2>LETA<span style={{color:"red"}}>GA<span style={{margin:"7px"}}>S.</span></span></h2></div>

        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR DEPORTS  IN KENYA</h1>
          <p className={styles.text}>
            1654 R. Kimathi Road #304.
            <br /> Nairobi, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. Luthuli Rd #235.
            <br /> Nairobi, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Mugoma St #104.
            <br /> Nakuru, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Narok St #125.
            <br /> Narok, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;