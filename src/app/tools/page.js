import styles from "./Tools.module.css";
import Image from "next/image";

const title = "Collection of Renders for Explorer Project"
const description = ""

export default function Tools() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            <Image className={styles.image} src={"/tools_tools.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/tools_crow1.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/tools_crow2.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/tools_specimen1.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/tools_specimen2.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/tools_inkwell.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/tools_beaker.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/tools_spoons.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/tools_hourglass.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/tools_desk1.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/tools_desk2.jpg"} width={500} height={800} alt="image not supported"/>
            <Image className={styles.image} src={"/tools_desk3.jpg"} width={500} height={800} alt="image not supported"/>
          </div>
          <p className={styles.description}>{description}</p>
      </div>
    )
}