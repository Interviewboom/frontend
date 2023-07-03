import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

import "tinymce/skins/ui/oxide-dark/content.css";

import { wrapper } from "src/redux/store";
import "../styles/globals.scss";

const App = ({ Component, ...rest }: AppProps) => {
    const {
        store,
        props: { session, ...props },
    } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <SessionProvider session={session}>
                <Component {...props.pageProps} />
            </SessionProvider>
        </Provider>
    );
};

export default App;
