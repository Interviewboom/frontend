import { AppProps } from "next/app";
import "../styles/globals.css";

const MyApp = ({ Component }: AppProps) => {
    return <Component />;
};

export default MyApp;
