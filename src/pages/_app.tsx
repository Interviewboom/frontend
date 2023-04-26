import { AppProps } from "next/app";
import "tinymce/skins/ui/oxide-dark/content.css";

import "../styles/globals.scss";

import { wrapper } from "src/redux/store";

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
