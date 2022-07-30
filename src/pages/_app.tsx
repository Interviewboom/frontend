import "tinymce/skins/ui/oxide-dark/content.css";
import { AppProps } from "next/app";
import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
