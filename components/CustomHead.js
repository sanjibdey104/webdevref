import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <title>WevDevRef</title>
      <meta
        name="description"
        content="a resource reference blog for web developers"
      />
      <link rel="icon" href="/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default CustomHead;
