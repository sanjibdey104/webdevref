import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 100%;
}

*,*::before,*::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
}

body {
    width: 100%;
    height: 100vh;
    line-height: 1.4;
    --logo-color: #f7e019;


    .all-posts-link, .all-topics-link {
        width: 11rem;
        margin: auto;
        border-radius: 0.5rem;
        text-align: center;
        margin-bottom: 2rem;

        background-color: inherit;
        color: inherit;
        padding: 5px;
    }
}


body, input, a, button, textarea {
    font-family: inherit;
}


ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

img, svg {
    display: block;
}

button {
    border: 0;
    cursor: pointer;
    background-color: inherit;
}

.all-posts-link, .all-topics-link {
    width: 11rem;
    margin: auto;
    border-radius: 0.5rem;
    text-align: center;
    margin-bottom: 2rem;

    background-color: inherit;
    color: inherit;
    padding: 5px;
}
`