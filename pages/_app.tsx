import Head from "next/head";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Francisco Aloi</title>
                <meta name="description" content="Porftolio" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider attribute="class">
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}
