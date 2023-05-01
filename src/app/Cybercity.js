import styles from "./Cybercity.module.css";
import Image from "next/image";

const title = "Enter the Cybercity"
const description = "18x24 pen drawing on Bristol board in three-point perspective. Futuristic city being looked over by futuristic ronin type character. Heavy focus on varied textures and scale when forcing perspective."

export default function CyberNoir() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            <Image className={styles.image} src={"/Cybercity.jpg"} width={500} height={800} alt="image not supported (Amazon logo pen and ink)"/>
          </div>
          <p className={styles.description}>{description}</p>
      </div>
    )
}