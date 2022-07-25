import { Html, Head, Main, NextScript } from "next/document";

export default () => {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    rel="stylesheet"
                    href="https://cdn.tiny.cloud/1/dsrmqe05x8czkdvjdsu41bzmr4q1ddsi1shcmnlhy4nrc219/tinymce/6.0.3-5/skins/ui/oxide/content.min.css"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};
