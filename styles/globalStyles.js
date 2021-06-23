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
    background-color: ${({theme}) => theme.backgroundColor};
    color: ${({theme}) => theme.textColor};
    line-height: 1.4;
    --logo-color: #f7e019;

    .container {
        width: 75%;
        min-height: 100vh;
        margin: 0 auto;
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (max-width: 600px) {
            width: 90%;
            margin: 0 auto;
        }
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
    border-left: 3px solid ${({theme}) => theme.accentColor};
    box-shadow: ${({theme}) => theme.boxShadow};
}
`

export const lightTheme = {
    backgroundColor: "#f5f5f5",
    textColor: "#000",
    accentColor: "#4262ff",
    boxShadow: "inset 0 0 7.5px rgba(0,0,0,0.2)"
}

export const darkTheme = {
    backgroundColor: "#121212",
    textColor: "#ffffffda",
    accentColor: "#cf6679",
    boxShadow: "0 0 8px #000"
}