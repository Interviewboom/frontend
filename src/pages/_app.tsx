import { AppProps } from "next/app";
import { Provider } from "react-redux";

import "tinymce/skins/ui/oxide-dark/content.css";

import "../styles/globals.scss";

import { wrapper } from "src/redux/store";

const App = ({ Component, ...rest }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    );
};

export default App;
