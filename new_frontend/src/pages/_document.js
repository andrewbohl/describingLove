import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentsSheet = new ServerStyleSheet();
    const orginalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        orginalRenderPage({
          enhanceApp: (App) => (props) =>
          styledComponentsSheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
          </React.Fragment>
        ),
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }
  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
// import Document, { Head, Main, NextScript} from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

// export default class MyDocument extends Document {
//     static getInitialProps ({renderPage}) {
//         const sheet = new ServerStyleSheet()
//         const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
//         const styleTags = sheet.getStyleElement()
//         return {...page, styleTags}
//     }

//     render () {
//         return (
//             <html>
//                 <Head>
//                     {this.props.styleTags}
//                 </Head>
//                 <body>
//                     <Main />
//                     <NextScript />
//                 </body>
//             </html>
//         )
//     }
// }
