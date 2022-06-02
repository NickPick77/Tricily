import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Cardlist from '../components/CardList'
import styles from '../styles/Home.module.css'
import SearchInput from "../components/SearchInput";

export default function Home() {

  const Map = dynamic(() => import("../components/Map"), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  });

  function sendCoords(data){
    setCoords(data)
  }


  return (
    <>
      <Head>
        <title>Tricily</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SearchInput/>
       <Map></Map>
      </main>

      <section>
      <Cardlist/>
      </section>

    
    </>
  );
}
