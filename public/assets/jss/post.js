const containerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
};

const componentsStyle = {
    container: {
        ...containerFluid,
        "@media (min-width: 576px)": {
          maxWidth: "540px"
        },
        "@media (min-width: 768px)": {
          maxWidth: "720px"
        },
        "@media (min-width: 992px)": {
          maxWidth: "960px"
        },
        "@media (min-width: 1200px)": {
          maxWidth: "1140px"
        }
    },
    thumbnail: {
      float: "left",
      marginTop: "30px"
      
    },
    title: {
      fontSize: "3.2rem",
      fontWeight: "600",
      display: "inline-block",
      position: "relative"
    },
    subtitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px 0 0"
    },
    link: {
      textDecoration: "none"
    },
    textCenter: {
      textAlign: "center"
    }
  };
  
  export default componentsStyle;