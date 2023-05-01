import styles from "./ThirdPage.module.css";
import Image from "next/image";

const title = "Project 2"
const description = "Description of said project, maybe date or something even"

export default function SecondPage() {
    return (
        <div className={styles.third_page}>
          <div className={styles.text}>
            <h1>{title}</h1>
            <h3>{description}</h3>
          </div>
          <div className={styles.content}>
            <Image className={styles.image} src={"/SAV_202310_FOUN_DRAW100_WyattWingate_Project 2 Two Point Perspective Futuristic Cybercity.jpeg"} width={500} height={800} alt="Hidetaka Miyazaki"/>
          </div>
      </div>
    )
}