import styles from "./SecondPage.module.css";
import Image from "next/image";

export default function SecondPage() {
    return (
        <div className={styles.second_page}>
          <div>
            <h1>Project 1</h1>
            <h3>Description of said project, maybe date or something even</h3>
          </div>
          <div>
            <Image className={styles.image} src={"/WyattWingate-Poster-Final.jpg"} width={500} height={800} alt="Hidetaka Miyazaki"/>
          </div>
      </div>
    )
}