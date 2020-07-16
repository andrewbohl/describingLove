import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import StoreProvider from "../hooks/useStore";
// import theme from '../styles/Theme.js';
const theme = {
  colors: {
    main: "#FCEFED",
  },
};

class MyApp extends App {
  componentDidMount() {
    const jssStyles = {};
  }

  render() {
    const { Component, pageProps } = this.props;
    const propsToPassToComponent = { ...pageProps };
    return (
      // <StoreProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Describing Love</title>
          </Head>
          <Header />
          <Component {...propsToPassToComponent} />
        </ThemeProvider>
      // </StoreProvider>
    );
  }
}
export default MyApp;
// import App from "next/app";
// import Page from "../components/Page";
// import { ApolloProvider } from "react-apollo";
// import withData from "../../lib/withData";

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {};
//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }
//     // this exposes the query to the user
//     pageProps.query = ctx.query;
//     return { pageProps };
//   }
//   render() {
//     const { Component, apollo, pageProps } = this.props;
//     return (
//         <ApolloProvider client={apollo}>
//           <Page>
//             <Component {...pageProps} />
//           </Page>
//         </ApolloProvider>
//     );
//   }
// }
// export default withData(MyApp);
