import Document, { Html, Head, Main, NextScript } from "next/document";

//this file applies to all pages globally.
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <meta
            name="google-site-verification"
            content="F0-yRnDPO4rncEMXr9QLsS2zwlPDb-uUEQrQPrsIsjQ"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/fonts/ttcommons-bold-webfont.woff2" as="font"  type="font/woff2" crossOrigin="anonymous" ></link>
          <link rel="preload" href="/fonts/ttcommons-demibold-webfont.woff2" as="font"  type="font/woff2" crossOrigin="anonymous" ></link>
          <link rel="preload" href="/fonts/ttcommons-medium-webfont.woff2" as="font"  type="font/woff2" crossOrigin="anonymous" ></link>
          <link rel="preload" href="/fonts/ttcommons-regular-webfont.woff2" as="font"  type="font/woff2" crossOrigin="anonymous" ></link>
          <link rel="preload" href="/fonts/ttnorms-bold-webfont.woff2" as="font"  type="font/woff2" crossOrigin="anonymous" ></link>
          <link rel="preload" href="/fonts/ttnorms-regular-webfont.woff2" as="font"  type="font/woff2" crossOrigin="anonymous" ></link>
 
         
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
