import { AppProps } from "next/app";
import { Provider } from "react-redux";

import "tinymce/skins/ui/oxide-dark/content.css";

import { wrapper } from "src/redux/store";
import "../styles/globals.scss";

const App = ({ Component, ...rest }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    );
};

export default App;
