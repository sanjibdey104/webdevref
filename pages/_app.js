import React from 'react';
import { GlobalStyles, lightTheme, darkTheme } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { ThemePreference } from '../styles/themeConfig';
import Layout from '../components/Layout';
import { ThemeContext } from '../context/ThemeContext';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {

  const [theme, toggleTheme] = ThemePreference();
  let themePreference = (theme === 'dark') ? darkTheme : lightTheme;

  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeContext.Provider value={{theme: theme,toggleTheme: toggleTheme}}>
      <ThemeProvider theme={themePreference} >
      <GlobalStyles />
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      </ThemeContext.Provider>
    </AnimatePresence>
  )
}

export default MyApp
