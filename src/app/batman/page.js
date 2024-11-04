import styles from "./Batman.module.css";
import Image from "next/image";

const title = "Batman 3-D Render"
const description = ""

export default function Batman() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            <Image className={styles.image} src={"/BatmanFullBodyTurnaround.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/BatmanHeadTurnaround.jpg"} width={500} height={800} alt="image not supported"/>
          </div>
          <p className={styles.description}>{description}</p>
      </div>
    )
}