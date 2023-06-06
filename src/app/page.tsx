import styles from './page.module.css';
import Link from 'next/link'
import Type from "./components/type/Type";
import ImageGrid from "./ImageGrid";
import Header from './components/header/Header';
import About from './about/page';
import Footer from "./components/footer/Footer";
import Image from 'next/image';


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.landing}>
        <div className={styles.wyatt_and_links}>
            
            <div className={styles.name}>
              <h1 className='name'>Wyatt Wingate</h1>
              <Type />
            </div>

          </div>

          <div className={styles.center}>
            <video className={styles.logo_animation} autoPlay muted>
              <source src="/Comp_1RGB.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <ImageGrid />
        <div className={styles.wyatt_about_container}>
          <h1>Meet the Artist!</h1>
          <div className={styles.about_me_section}>
            <div className={styles.wyatt_picture}>
              <Image src={"/wyatt_profile.jpg"} alt='good looking dude' fill/>
            </div>
            <p>Hi I’m Wyatt Wingate, a 3D technical animation student at SCAD with interest in animation and modeling for video games and movies, and wanting to specialize in hard surface modeling and design. In my free time I play video games, build and paint scale models from model tanks, to Warhammer and DND models and I enjoy spending time with friends and family. My art journey began with ceramics in high school through all four years ending in AP ceramics and winning the art award for my school, and found a way to merge my passions of gaming and 3D modeling by discovering blender and zbrush, and enrolled into school shortly after.</p>
            </div>
            <Footer />
        </div>
    </main>
  )
}
