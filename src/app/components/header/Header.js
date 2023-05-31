'use client';
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Link from "next/link";


export default function Header() {

    const path = usePathname();
    // console.log("pathname: ", path)

    return (
        <div className={styles.main_div}>
            <ul className={styles.nav}>
                {path === "/" ? 
                    <>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact_me">Contact</Link></li>
                    </>
                : null
                }
                {path === "/portfolio" ? 
                    <>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact_me">Contact</Link></li>
                    </> : null}
                {path === "/about" ?  
                    <>
                    <li><Link href="/">Home</Link></li> 
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/contact_me">Contact</Link></li>
                    </> : null}
                {path === "/contact_me" ? 
                    <>  
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </> : null}
            </ul>
        </div>
    )
}