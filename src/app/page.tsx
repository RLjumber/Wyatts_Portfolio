import styles from './page.module.css';
import Link from 'next/link'
import Type from './type/Type';
import SecondPage from "./SecondPage";

export default function Home() {
  return (
    <main className={styles.main}>

    <div className={styles.landing}>
      
      <div className={styles.wyatt_and_links}>
          
          <div className={styles.name}>
            <h1 className='name'>Wyatt Wingate</h1>
            <Type />
          </div>

          <div className={styles.grid}>
            <Link href="/portfolio" legacyBehavior>
              <a className={styles.card}>
                <h2>
                  Portfolio <span>-&gt;</span>
                </h2>
                <p>Display of related works.</p>
              </a>
            </Link>

            <Link href="/about" legacyBehavior>
              <a className={styles.card}>
                <h2>
                  About <span>-&gt;</span>
                </h2>
                <p>Who I am and what I do.</p>
              </a>
            </Link>

            <Link href="/other_works" legacyBehavior>
              <a className={styles.card}>
                <h2>
                  Other Work <span>-&gt;</span>
                </h2>
                <p>Projects for fun</p>
              </a>
            </Link>
          </div>

        </div>

        <div className={styles.center}>
          <video className={styles.logo_animation} autoPlay muted>
            <source src="/Comp 1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <SecondPage />

    </main>
  )
}
