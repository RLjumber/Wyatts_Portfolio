import styles from "./Footer.module.css";
import { AiFillEdit, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

export default function Footer() {
    return (
        <div className={styles.main}>
            <div className={styles.contact}>
                <h1>Like what you see? Contact Me!</h1>
                <div className={styles.icons}>
                    <AiFillEdit />
                    <GrMail />
                    <AiFillInstagram />
                    <AiFillPhone />
                </div>
            </div>
            <div className={styles.footer_main}>
                <div className={styles.list_box}>
                    <h3>Last Updated: June 2023</h3>
                </div>
                <div className={styles.list_box}>
                    <h3>Savannah College of Art and Design</h3>
                </div>
                <div className={styles.list_box}>
                    <h3>Tech and Credit</h3>
                    <ul>
                        <li>Built with Next.js 13</li>
                        <li>Hosting by Vercel</li>
                        <li>Built by R. Luke Jumber </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}