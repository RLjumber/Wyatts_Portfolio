import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer_main}>
            <div className={styles.list_box}>
                <h3>Title</h3>
                <ul>
                    <li>Word</li>
                    <li>Word</li>
                    <li>Word</li>
                    <li>Word</li>
                </ul>
            </div>
            <div className={styles.list_box}>
                <h3>Title</h3>
                <ul>
                    <li>Word</li>
                    <li>Word</li>
                    <li>Word</li>
                    <li>Word</li>
                </ul>
            </div>
            <div className={styles.list_box}>
                <h3>Title</h3>
                <ul>
                    <li>Word</li>
                    <li>Word</li>
                    <li>Word</li>
                    <li>Word</li>
                </ul>
            </div>
        </div>
    )
}