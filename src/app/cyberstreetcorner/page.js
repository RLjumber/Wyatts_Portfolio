import styles from "./page.module.css";
import Image from "next/image";

const title = "Cyberstreet Corner"
const description = "11x14 Micron pen drawing on Bristol paper of reimagined diner on the street corner of a futuristic cyberpunk street at night. Heavy focus on trying to incorporate object source lighting."

export default function CyberstreetCorner() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>{title}</h1>
          
          <div className={styles.content}>
            <Image className={styles.image} src={"/CyberStreetCorner.jpg"} width={500} height={800} alt="image not found, sorry!"/>
          </div>
          <p className={styles.description}>{description}</p>
      </div>
    )
}