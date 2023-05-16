import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";

import "tinymce/skins/ui/oxide-dark/content.css";

import "../styles/globals.scss";

import { wrapper, persistor } from "src/redux/store";

const App = ({ Component, ...rest }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Component {...props.pageProps} />
            </PersistGate>
        </Provider>
    );
};

export default App;
