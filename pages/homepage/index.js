import dynamic from "next/dynamic";
import { useDataContext } from "../../context/DataContext/dataContext";

import Hero from "../../components/Hero/hero";
import CardList from "../../components/CardList";
import ExperienceFinder from "../../components/ExperienceFinder/ExperienceFinder";
import SkeletonLoading from "../../components/SkeletonLoading";

import styles from "./styles.module.scss";

export default function Homepage() {
  const { dataStore } = useDataContext();

  return (
    <section className={styles.homepage}>
      <Hero />
      <section className={styles.homepage__map}>
        <ExperienceFinder />
        {dataStore.loading && <SkeletonLoading />}
      </section>
      {dataStore.setControl && <CardList />}
    </section>
  );
}
