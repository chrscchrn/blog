import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Blogify</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Words
        </h1>

          <p>
            post: <br/>
          date, author, subtitle, body, pictures, on the top there can be a back component
            <hr/>
            front: <br/>
            Cool pic or item for Nav  ||| link back to the portfolio
            <hr/>
            title or some piece of words, pictures, or anything for the most intro spot
            <hr/>
            have a card for each article
            <hr/>
            maybe have another item or something at the bottom to make it looks artsy fartsy
            <hr/>
            My personal links
          </p>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://portfolio-cnc.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Christopher Cochran{' '}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
    </>
  )
}
