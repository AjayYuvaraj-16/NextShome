import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://kit.fontawesome.com/f7e70e8e98.js" crossOrigin="anonymous" defer></script>
      </Head>
      <body className="antialiased">
        <div id="root">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
