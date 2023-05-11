import styles from "./CyberNoir.module.css";
import Image from "next/image";

const title = "Cybernoir"
const description = "18x24 on illustration board multimedia drawing of pen, charcoal and colored pencil of a multi scene cyberpunk noir fusion with futuristic elements in a noir styled poster."

export default function CyberNoir() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            <Image className={styles.image} src={"/CharcoalNoir.jpg"} width={500} height={800} alt="image not supported"/>
          </div>
          <p className={styles.description}>{description}</p>
      </div>
    )
}