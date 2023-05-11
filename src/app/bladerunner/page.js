import styles from "./Bladerunner.module.css"

export default function BladeRunnerVideo() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>BladeRunner 2049 Animation</h1>
            <video controls className={styles.actual_video}>
                <source src="/Wingate_Wyatt_ANIM190_15_A5_Winter_2023.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}