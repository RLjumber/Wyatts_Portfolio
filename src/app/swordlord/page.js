import styles from "./SwordLord.module.css";
import Image from "next/image";

const title = "Sword Lord"
const description = "16x20 drawing on black scratchboard of fantasy character with large headpiece and large sword; focus on fur, metal and hair texture."

export default function SwordLord() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            <Image className={styles.image} src={"/Sword_Lord.jpg"} width={500} height={800} alt="image not supported"/>
          </div>
          <p className={styles.description}>{description}</p>
      </div>
    )
}