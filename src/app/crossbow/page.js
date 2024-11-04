import styles from "./Crossbow.module.css";
import Image from "next/image";

const title = "Crossbow 3-D Render"
const description = ""

export default function Crossbow() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            <Image className={styles.image} src={"/crossbow.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/crossbow2.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/crossbow3.jpg"} width={500} height={800} alt="image not supported"/>
          </div>
          <p className={styles.description}>{description}</p>
      </div>
    )
}