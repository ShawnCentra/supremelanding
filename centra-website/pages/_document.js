import Document, { Html, Head, Main, NextScript } from "next/document";

//this file applies to all pages globally.
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KTMZK6W');`,
            }}
          ></script>
          <meta
            name="google-site-verification"
            content="F0-yRnDPO4rncEMXr9QLsS2zwlPDb-uUEQrQPrsIsjQ"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/ttcommons-bold-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/ttcommons-demibold-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/ttcommons-medium-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/ttcommons-regular-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/ttnorms-bold-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/ttnorms-regular-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTMZK6W"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
