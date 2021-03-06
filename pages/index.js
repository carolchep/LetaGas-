import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";
import GasList from "../components/GasList";
import Footer from "../components/Footer";

export default function Home({ pizzaList, admin }) {
    const [close, setClose] = useState(true);
    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza Restaurant </title>
                <meta name="description" content="Best pizza shop in town" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Featured />
            {<AddButton setClose={setClose} />}
            <GasList pizzaList={pizzaList} />
            {!close && <Add setClose={setClose} />}
            <Footer/>
        </div>
    );
}
export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    let admin = false;

    if (myCookie.token === process.env.TOKEN) {
        admin = true;
    }

    // const res = await axios.get("http://localhost:3000/api/products");
    const res = await axios.get("https://leta-gas1.vercel.app/api/products");
    return {
        props: {
            pizzaList: res.data,
            admin,
        },
    };
};