import React from 'react';
import { GlobalStyles } from '../styles/globalStyles';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
