import styles from "./Gundam.module.css";
import Image from "next/image";

const title = "Unit-07"
const description = "18x24 micron pen drawing on white Bristol paper of large mech in abandoned docking bay in 2 point perspective."

export default function Gundam() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            <Image className={styles.image} src={"/Gundam.jpg"} width={500} height={800} alt="image not supported"/>
          </div>
          <p className={styles.description}>{description}</p>
      </div>
    )
}