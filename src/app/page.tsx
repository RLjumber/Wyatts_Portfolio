import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <div className={styles.wyatt_and_links}>
          
          <div className={styles.name}>
            <h2>Wyatt Wingate... 3D Animator</h2>
          </div>

          <div className={styles.grid}>
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Portfolio <span>-&gt;</span>
              </h2>
              <p>Display of related works.</p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                About <span>-&gt;</span>
              </h2>
              <p>Who I am and what I do.</p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Other Works <span>-&gt;</span>
              </h2>
              <p>Explore my variety of work.</p>
            </a>
          </div>
        </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/WW.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

    </main>
  )
}
