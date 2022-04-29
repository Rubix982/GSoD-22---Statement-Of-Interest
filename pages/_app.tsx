import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Saif Ul Islam | Full Stack Developer"
        titleTemplate="Saif Ul Islam | Full Stack Developer"
        defaultTitle="Saif Ul Islam | Full Stack Developer"
        description="Hey! I'm Saif Ul Islam, A Software Engineer, Blogger, Open Source &amp; Student"
        openGraph={{
          url: "https://gs-o-d-22-statement-of-interest.vercel.app/",
          title: "Saif Ul Islam | Full Stack Developer",
          description:
            "Hey! I'm Saif Ul Islam, A Software Engineer, Blogger, Open Source Developer & Student!",
          images: [
            {
              url: "https://drive.google.com/file/d/1yt9HtiR0VTsoEna_02o2K2ICCXqUp8W6/view?usp=sharing",
              width: 800,
              height: 420,
              alt: "Saif Ul Islam | Software Engineer, Blogger, Open Source Developer & Student",
            },
          ],
        }}
        twitter={{
          handle: "@kr_anurag_",
          site: "@kr_anurag_",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Software Engineer, Blogger, Open Source Developer & Student, Saif, Web Developer, web development, web developer, blogger, tech, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
