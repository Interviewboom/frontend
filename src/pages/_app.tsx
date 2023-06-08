import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

import "tinymce/skins/ui/oxide-dark/content.css";

import "../styles/globals.scss";

import { wrapper } from "src/redux/store";

const App = ({ Component, ...rest }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <SessionProvider session={props.pageProps.session}>
                <Component {...props.pageProps} />
            </SessionProvider>
        </Provider>
    );
};

export default App;
