import Image from "next/image";
import Link from "next/link";
import styles from "./ImageGrid.module.css";

export default function ImageGrid() {
  return (
    <div className={styles.grid_main}>
        <h1 className={styles.image_grid_title}>Related Works</h1>
        <div className={styles.image_grid}>
        <div className={styles.image_grid_item}>
            <Link href="/cybernoir">
            <div className={styles.image_wrapper}>
                <Image
                src={"/CharcoalNoir.jpg"}
                alt="CharcoalNoir"
                width={435}
                height={580}
                />
            </div>
            </Link>
        </div>
        <div className={styles.image_grid_item}>
            <Link href="/cybercity">
            <div className={styles.image_wrapper}>
                <Image src={"/Cybercity.jpg"} alt="Cybercity" width={453}
                height={604
                } />
            </div>
            </Link>
        </div>
        <div className={styles.image_grid_item}>
            <Link href="/cyberstreetcorner">
            <div className={styles.image_wrapper}>
                <Image
                src={"/CyberStreetCorner.jpg"}
                alt="CyberStreetCorner"
                width={805}
                height={604}
                />
            </div>
            </Link>
        </div>
        <div className={styles.image_grid_item}>
            <Link href="/dualangel">
            <div className={styles.image_wrapper}>
                <Image src={"/Dual_Angel.jpg"} alt="Dual Angel" width={453}
                height={604} />
            </div>
            </Link>
        </div>
        <div className={styles.image_grid_item}>
            <Link href="/swordlord">
            <div className={styles.image_wrapper}>
                <Image
                src={"/Sword_Lord.jpg"}
                alt="Hidetaka Miyazaki Inspiration"
                width={453}
                height={604}
                />
            </div>
            </Link>
        </div>
        <div className={styles.image_grid_item}>
            <Link href="/bladerunner">
            <div className={styles.image_wrapper}>
                <Image
                src={"/BladeRunnerThumbnail.jpg"}
                alt="BladeRunnerThumbnail.jpg"
                width={644}
                height={371}
                />
            </div>
            </Link>
        </div>
        <div className={styles.image_grid_item}>
            <Link href="/poster">
            <div className={styles.image_wrapper}>
                <Image
                src={"/WyattWingate-Poster-Final.jpg"}
                alt="Hidetaka Miyazaki Inspiration"
                width={550}
                height={850}
                />
            </div>
            </Link>
        </div>
        <div className={styles.image_grid_item}>
            <Link href="/gundam">
            <div className={styles.image_wrapper}>
                <Image src={"/Gundam.jpg"} alt="Gundam" width={805}
                height={604} />
            </div>
            </Link>
        </div>
        </div>
    </div>
  );
}
