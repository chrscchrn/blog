import Head from 'next/head'
import { makeStyles } from "@material-ui/core/styles";
import Parallax from '../components/Parallax'
import classNames from "classnames";
import CssBaseline from '@material-ui/core/CssBaseline';

import styles from '../public/assets/jss/Front';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline/>
      <Head>
        <title>Blogify</title>
      </Head>

      <Parallax image={"../assets/img/mount.jpg"} >
        {/* grid container and item, some titles n shit */}
        <div className={classes.container}>
          Jim
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}> 
          <h1>
            Words
          </h1>
          <p>
            post: <br/>
          date, author, subtitle, body, pictures, on the top there can be a back component
          </p>
          <p>
            front: <br/>
            Cool pic or item for Nav  ||| link back to the portfolio
          </p>
          <p>  
            title or some piece of words, pictures, or anything for the most intro spot
          </p>
          <p>
            have a card for each article
          </p>
          <p>
            maybe have another item or something at the bottom to make it looks artsy fartsy
          </p>
          <p>
            My personal links
          </p>
      </div>
      <footer>
        <a
          href="https://portfolio-cnc.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Christopher Cochran{' '}
        </a>
      </footer>
    </>
  )
}
