import React from 'react';
import Head from 'next/head'
import classNames from "classnames";
import PerfectScrollbar from 'perfect-scrollbar';
import Post from '../components/Post';
import Parallax from '../components/Parallax'
import GridContainer from '../components/GridContainer';
import GridItem from '../components/GridItem';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from '@material-ui/core';
import { makeStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import styles from '../public/assets/jss/Front';

const useStyles = makeStyles(styles);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#577b8b',
      main: '#1f3a5a',
      dark: '#0e2333',
      contrastText: '#fff',
    },
    secondary: {
      light: '#7a6286',
      main: '#4d4463',
      dark: '#003439',
      contrastText: '#fff',
    },
  },
})

export default function Home() {
  const classes = useStyles();

  let divToFocus = React.createRef()
  let handleScroll = (e) => {
    if (divToFocus.current) {
      divToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }

  // const ps = new PerfectScrollbar('body');
  return (
    <>
      <CssBaseline/>
      <MuiThemeProvider theme={theme}>
        <Head>
          <title>Blogify</title>
        </Head>

        <Parallax image={"../assets/img/mount.jpg"} >
          {/* grid container and item, some titles n shit */}
          <div className={classNames(classes.container, classes.textCenter)}>
            <GridContainer>
              <GridItem>
                {/* <div className={classes.brand}>
                  <h1 className={classes.title}>Words.</h1>
                  <h3 className={classes.subtitle}>
                    A Badass Material-UI Kit based on Material Design.
                  </h3>
                </div> */}
                <Button variant="contained" color="primary" size="large" onClick={handleScroll}>
                  READ ARTICLES
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)} ref={divToFocus}> 
          <Post>
          </Post>
          <Post>
          </Post>
          <Post>
          </Post>
          <Post>
          </Post>
          <Post>
          </Post>
          <Post>
          </Post>
          <Post>
          </Post>
          <Post>
          </Post>
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
      </MuiThemeProvider>
    </>
  )
}
