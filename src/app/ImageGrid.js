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
                            <Image
                                className={styles.image}
                                src={"/CharcoalNoir.jpg"}
                                alt="CharcoalNoir"
                                fill
                            />
                            <div className={styles.image_blur}> 
                                <div className={styles.image_hover_title}>Cyber-Noir</div>
                            </div>
                        
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/cybercity">
                        
                            <Image 
                                className={styles.image}
                                src={"/Cybercity.jpg"}
                                alt="Cybercity"
                                fill 
                                />
                            <div className={styles.image_blur}> 
                                <div className={styles.image_hover_title}>Cyber-City</div>
                            </div>
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/cyberstreetcorner">                            <Image
                                className={styles.image}
                                src={"/CyberStreetCorner.jpg"}
                                alt="CyberStreetCorner"
                                fill
                            />
                            <div className={styles.image_blur}> 
                                <div className={styles.image_hover_title}>Cyberstreet Corner</div>
                            </div>
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/dualangel">
                            <Image 
                                className={styles.image} 
                                src={"/Dual_Angel.jpg"} 
                                alt="Dual Angel" 
                                fill
                                />
                            <div className={styles.image_blur}> 
                                <div className={styles.image_hover_title}>Dual Angel</div>
                            </div>
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/swordlord">
                            <Image
                                className={styles.image}
                                src={"/Sword_Lord.jpg"}
                                alt="Hidetaka Miyazaki Inspiration"
                                fill
                            />
                            <div className={styles.image_blur}> 
                                <div className={styles.image_hover_title}>Sword Lord</div>
                            </div>
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/bladerunner">
                            <Image
                                className={styles.image}
                                src={"/BladeRunnerThumbnail.jpg"}
                                alt="BladeRunnerThumbnail.jpg"
                                fill
                            />
                            <div className={styles.image_blur}> 
                                <div className={styles.image_hover_title}>Bladerunner Animation</div>
                            </div>
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/poster">
                            <Image
                                className={styles.image}
                                src={"/WyattWingate-Poster-Final.jpg"}
                                alt="Hidetaka Miyazaki Inspiration"
                                fill
                            />
                            <div className={styles.image_blur}> 
                                <div className={styles.image_hover_title}>Hidetaka Miyazaki Inspiration</div>
                            </div>
                    </Link>
                </div>
                <div className={styles.image_grid_item}>
                    <Link href="/gundam">
                            <Image 
                                className={styles.image} 
                                src={"/Gundam.jpg"} 
                                alt="Gundam" 
                                fill
                                />
                            <div className={styles.image_blur}> 
                                <div className={styles.image_hover_title}>Unit 07</div>
                                <div></div>
                            </div>  
                    </Link>
                </div>
            </div>
        </div>
    );
}
