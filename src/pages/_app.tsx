import { AppProps } from "next/app";
import "tinymce/skins/ui/oxide-dark/content.css";

import "../styles/globals.scss";
import { Provider } from "react-redux";
import { wrapper } from "src/redux/store/store";

const App = ({ Component, ...rest }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    );
};

export default App;
