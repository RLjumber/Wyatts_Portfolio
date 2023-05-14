import styles from "./page.module.css";
import Link from "next/link";

export default function ContactMe() {
    return (
        <div className={styles.main_div}>
            <div className={styles.content}>
                <h1>Contact Me</h1>
                {/* <p>Could put something here?</p> */}
            </div>
            <div className={styles.second_div}>
                <video className={styles.logo_animation} autoPlay muted>
                <source src="/Comp_1RGB.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                <ul className={styles.list}>
                    <Link href="https://www.artstation.com/wyattwingate8" className={styles.link}><li>My Art Station</li></Link>
                    <li>Email: walkerwyatt1213@gmail.com</li>
                    <li>Insta: <em>wyatt_w27</em> or <em>rekragart</em></li>
                    <li>Phone: (904) 309 1087</li>
                </ul>
            </div>
        </div>
    )
};