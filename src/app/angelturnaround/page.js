import styles from "./AngelTurnaround.module.css";
import Image from "next/image";

const title = "Angel 3-D Render"
const description = ""

export default function AngelTurnaround() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            <Image className={styles.image} src={"/AngelTurnaround.jpg"} width={500} height={800} alt="image not supported"/>
          </div>
          <p className={styles.description}>{description}</p>
      </div>
    )
}