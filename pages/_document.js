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
            {/* potrzbene do ReactPPortals tutaj do notification pozwala dodać react hooka potrzebny React Portal, id dowolne */}
            <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;