import styles from "./portfolio.module.css";
import Header from "../components/header/Header";

export default function PortfolioLanding() {
    return (
        <>
            <Header />
            <div className={styles.main_div}>
                <div className={styles.content}>
                    <h1 className={styles.portfolio_title}>Portfolio</h1>
                </div>
            </div>
        </>
    )
};