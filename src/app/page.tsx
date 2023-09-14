import Image from "next/image";
import styles from "./page.module.css";
import { MapboxMap } from "@/components/MapboxMap";
import { MainMenu } from "@/components/MainMenu";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainMenu />
      <div style={{ width: "100%", height: "600px" }}>
        <MapboxMap />
      </div>
    </main>
  );
}
