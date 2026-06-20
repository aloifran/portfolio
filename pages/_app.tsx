import Head from "next/head";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

const siteTitle = "Francisco Aloi";
const siteDescription =
    "Portfolio of Francisco Aloi, Senior Test Automation Engineer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content={siteDescription} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={siteDescription} />
                <meta property="og:site_name" content={siteTitle} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={siteTitle} />
                <meta name="twitter:description" content={siteDescription} />
            </Head>
            <ThemeProvider attribute="class" enableSystem={false}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}
