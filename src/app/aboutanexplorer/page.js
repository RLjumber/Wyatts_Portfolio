import styles from "./Explorer.module.css";
import Image from "next/image";

const title = "About an Explorer, 3-D Render"
const description = "Full Room Render using multiple components."

export default function Explorer() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            <Image className={styles.image} src={"/AboutAnExplorer.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/AboutAnExplorerCrow.jpg"} width={500} height={800} alt="image not supported"/>
          </div>
          <p className={styles.description}>{description}</p>
      </div>
    )
}