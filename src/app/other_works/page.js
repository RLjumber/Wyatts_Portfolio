import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function OtherWorks() {
    return (
        <div className={styles.main_div}>
            <div className={styles.content}>
                <h1>Contact Me</h1>
                {/* <p>Could put something here?</p> */}
            </div>
            <div className={styles.second_div}>
                <Image className={styles.image} src={"/BizCard.jpg"} width={500} height={800} alt="image not supported"/>
                <ul className={styles.list}>
                    <Link href="https://www.artstation.com/wyattwingate8" className={styles.link}><li>My Art Station</li></Link>
                    <li>walkerwyatt1213@gmail.com</li>
                    <li><em>wyatt_w27</em> or <em>rekragart</em></li>
                    <li>(904) 309 1087</li>
                </ul>
            </div>
        </div>
    )
};