import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
    return (
        <div className={styles.main_div}>
            <div className={styles.content}>
                <h1>About Me</h1>
                <div className={styles.picture_and_text}>
                    <Image src={"/wyatt_profile.jpg"} width={453} height={604} alt="Probably needs a haircut"/>
                    <p>Hi I’m Wyatt Wingate, a 3D technical animation student at SCAD with interest in animation and modeling for video games and movies, and wanting to specialize in hard surface modeling and design. In my free time I play video games, build and paint scale models from model tanks, to Warhammer and DND models and I enjoy spending time with friends and family. My art journey began with ceramics in high school through all four years ending in AP ceramics and winning the art award for my school, and found a way to merge my passions of gaming and 3D modeling by discovering blender and zbrush, and enrolled into school shortly after.</p>
                </div>
                </div>
        </div>
    )
};