import React from 'react';
import { AppProps } from 'next/app';
import Header from '../components/header/Header';
import '../styles/global.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
   
      <Header />
      <Component {...pageProps} />

    </ThemeProvider>
  );
};

export default MyApp;
