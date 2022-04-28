import "/styles/fonts.css"
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";

// import "react-multi-carousel/lib/styles.css";
export default function MyApp({ Component, pageProps }) {


  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
