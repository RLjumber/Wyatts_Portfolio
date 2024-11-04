import styles from "./Mushroom.module.css";
import Image from "next/image";

const title = "Mushroom Man 3-D Render"
const description = ""

export default function MushroomMan() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            <Image className={styles.image} src={"/MushroomManSnapShotTurnaround.jpg"} width={500} height={800} alt="image not supported"/>
          </div>
          <p className={styles.description}>{description}</p>
      </div>
    )
}