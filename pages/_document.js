import Document, { Html, Head, Main, NextScript } from "next/document";

// bazowy komponent roszzszerzajcy komponent z Nextjs
// standardowo struktura pliku html, po dodaniu pliku _document.js trzeba zrestartować serwer developerski
class MyDocument extends Document {
  render() {
    return (
        // można teraz Html dac atrubtu języka
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;