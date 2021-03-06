import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "../public/assets/jss/parallaxStyle.js";

const useStyles = makeStyles(styles);

export default function Parallax(props) {
    
    let windowScrollTop;
    React.useEffect(() => {
        if (window.innerWidth >= 768) {
            windowScrollTop = window.pageYOffset / 3;
        } else {
            windowScrollTop = 0;
        }
    }, []);
    
    
    const [transform, setTransform] = React.useState(
      "translate3d(0," + windowScrollTop + "px,0)"
    );

    React.useEffect(() => {
        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", resetTransform);
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener("scroll", resetTransform);
            }
        };
    });
    
    const resetTransform = () => {
        var windowScrollTop = window.pageYOffset / 3;
        setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };
    const { children, image, filter, small, className } = props;
    const classes = useStyles();
    const parallaxClasses = classNames({
        [classes.parallax]: true,
        [classes.filter]: filter,
        [classes.small]: small,
        [className]: className !== undefined,
    });

    return (
        <div
            className={parallaxClasses}
            style={{
                backgroundImage: "url(" + image + ")",
                transform: transform,
            }}
        >
            {children}
        </div>
    )
}

Parallax.propTypes = {
    image: PropTypes.string,
    children: PropTypes.node,
};
