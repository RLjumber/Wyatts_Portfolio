import styles from "./SecondPage.module.css";
import Image from "next/image";

const title = "GAME OF THE YEAR"
const description = "Yadayada who cares"

export default function SecondPage() {
    return (
        <div className={styles.second_page}>
          <div className={styles.text}>
            <h1>{title}</h1>
            
            
          </div>
          <div className={styles.content}>
            <Image className={styles.image} src={"/WyattWingate-Poster-Final.jpg"} width={500} height={800} alt="Hidetaka Miyazaki"/>
          </div>
      </div>
    )
}