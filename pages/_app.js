import React from 'react';
import { GlobalStyles, lightTheme, darkTheme } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { ThemePreference } from '../styles/themeConfig';
import Layout from '../components/Layout';
import { ThemeContext } from '../context/ThemeContext';

function MyApp({ Component, pageProps }) {

  const [theme, toggleTheme] = ThemePreference();
  let themePreference = (theme === 'dark') ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{theme: theme,toggleTheme: toggleTheme}}>
    <ThemeProvider theme={themePreference} >
    <GlobalStyles />
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default MyApp
