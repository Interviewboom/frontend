import { AppProps } from "next/app";
import "tinymce/skins/ui/oxide-dark/content.css";

import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
