import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import styles from '../public/assets/jss/post';

const useStyles = makeStyles(styles);

export default function Post() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img src="https://via.placeholder.com/150" className={classes.thumbnail}/>
            <h1 className={classes.title}>
                Words
            </h1>
            <p className={classes.subtitle}>
            date, author, subtitle, body, pictures, on the top there can be a back component
            <br/>

            </p>
        </div>
    )
}
