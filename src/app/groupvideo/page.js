import styles from "./GroupVideo.module.css"

export default function GroupVideo() {
    return (
        <div className={styles.main_div}>
            <h1 className={styles.title}>3-D Monster Rig for Group Project</h1>
            <iframe
                    className={styles.actual_video}
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VUpFT2zq8kU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
        </div>
    )
}