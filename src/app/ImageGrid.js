import Image from "next/image";
import Link from "next/link";
import styles from "./ImageGrid.module.css";


export default function ImageGrid() {
    return (
        <div className={styles.grid_main}>
            <h1 className={styles.image_grid_title}>Projects</h1>
            <div className={styles.image_grid}>
                <div className={styles.image_grid_item}>
                    <Link href="/cybernoir">
                        <div className={styles.image_wrapper}>
                            <Image
                                className={styles.image}
                                src={"/CharcoalNoir.jpg"}
                                alt="CharcoalNoir"
                                fill
                            />
                        </div>
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/cybercity">
                        <div className={styles.image_wrapper}>
                            <Image 
                                className={styles.image}
                                src={"/Cybercity.jpg"}
                                alt="Cybercity"
                                fill 
                                />
                        </div>
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/cyberstreetcorner">
                        <div className={styles.image_wrapper}>
                            <Image
                                className={styles.image}
                                src={"/CyberStreetCorner.jpg"}
                                alt="CyberStreetCorner"
                                fill
                            />
                        </div>
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/dualangel">
                        <div className={styles.image_wrapper}>
                            <Image 
                                className={styles.image} 
                                src={"/Dual_Angel.jpg"} 
                                alt="Dual Angel" 
                                fill
                                />
                        </div>
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/swordlord">
                        <div className={styles.image_wrapper}>
                            <Image
                                className={styles.image}
                                src={"/Sword_Lord.jpg"}
                                alt="Hidetaka Miyazaki Inspiration"
                                fill
                            />
                        </div>
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/bladerunner">
                        <div className={styles.image_wrapper}>
                            <Image
                                className={styles.image}
                                src={"/BladeRunnerThumbnail.jpg"}
                                alt="BladeRunnerThumbnail.jpg"
                                fill
                            />
                        </div>
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/poster">
                        <div className={styles.image_wrapper}>
                            <Image
                                className={styles.image}
                                src={"/WyattWingate-Poster-Final.jpg"}
                                alt="Hidetaka Miyazaki Inspiration"
                                fill
                            />
                        </div>
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/gundam">
                        <div className={styles.image_wrapper}>
                            <Image 
                                className={styles.image} 
                                src={"/Gundam.jpg"} 
                                alt="Gundam" 
                                fill
                                />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
