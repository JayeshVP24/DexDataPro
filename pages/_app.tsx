import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

const  MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8 "
                />
            </Head>
            <div>
                <DefaultSeo {...SEO} />
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} />
                </AnimatePresence>
            </div>
        </>
    );
}

export default MyApp;
