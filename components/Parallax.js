import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    parallax: {
        maxHeight: "1000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
        height: "45vw",
        width: "100%",
    },
});

export default function Parallax(props) {
    
    let windowScrollTop;
    // if (window.innerWidth >= 768) {
    //   windowScrollTop = window.pageYOffset / 3;
    // } else {
    //   windowScrollTop = 0;
    // }
    
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
    
    const classes = useStyles();

    return (
        <div
            className={classes.parallax}
            style={{backgroundImage: "url(" + props.image + ")"}}
        >
            
        </div>
    )
}
