import React from 'react';
import Head from 'next/head';

const CustomHead = () => {
    return (
        <Head>
            <title>WevDevRef</title>
            <meta name="description" content="a resource reference blog for web developers" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
        </Head>
    )
}

export default CustomHead;
