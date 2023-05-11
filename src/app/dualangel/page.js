import styles from "./DualAngel.module.css";
import Image from "next/image";

const title = "Dual Angel"
const description = "18x24 colored pastel and color pencil drawing of a female character with angel wings, a halo and devil horns using a complimentary color scheme."

export default function Gundam() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            <Image className={styles.image} src={"/Dual_Angel.jpg"} width={500} height={800} alt="image not supported"/>
          </div>
          <p className={styles.description}>{description}</p>
      </div>
    )
}