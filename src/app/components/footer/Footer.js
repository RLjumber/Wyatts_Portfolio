"use client"

import Link from "next/link";
import styles from "./Footer.module.css";
import { AiFillEdit, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

export default function Footer() {

    const showPhoneNumber = () => {
       alert("Call or Text at (904) 309 1087")
    };

    return (
        <div className={styles.main}>
            <div className={styles.contact}>
                <h1>Like what you see? Contact Me!</h1>
                <div className={styles.icons}>
                    <Link href="https://www.artstation.com/wyattwingate8"><AiFillEdit /></Link>
                    <Link href="mailto:walkerwyatt1213@gmail.com"><GrMail /></Link>
                    <Link href="https://www.instagram.com/rekragart/"><AiFillInstagram /></Link>
                    <AiFillPhone onClick={showPhoneNumber} />
                </div>
            </div>
            <div className={styles.footer_main}>
                <div className={styles.list_box}>
                    <h3>Last Updated: November 2nd, 2024</h3>
                </div>
                <div className={styles.list_box}>
                    <h3>Savannah College of Art and Design</h3>
                </div>
                <div className={styles.list_box}>
                    <h3>Tech</h3>
                    <ul>
                        <li>Built with Next.js 13</li>
                        <li>Hosting by Vercel</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}