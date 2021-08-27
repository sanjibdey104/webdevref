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
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default CustomHead;
