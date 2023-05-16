import styles from "./Poster.module.css";
import Image from "next/image";

const title = "Hidetaka Miyazaki Inspiration"

export default function Poster() {
    return (
        <div className={styles.main_div}>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
          </div>

          <div className={styles.content}>
            <Image className={styles.image} src={"/WyattWingate-Poster-Final.jpg"} width={500} height={800} alt="Hidetaka Miyazaki"/>
          </div>
      </div>
    )
}