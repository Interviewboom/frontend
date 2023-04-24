import { AppProps } from "next/app";
import "tinymce/skins/ui/oxide-dark/content.css";
import "../styles/globals.scss";
import { wrapper } from "src/store/store";
import { Provider } from "react-redux";

const App = ({ Component, ...rest }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    );
};

export default App;
