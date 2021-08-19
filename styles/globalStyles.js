import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --font-primary: 'Montserrat', sans-serif;
    --font-secondary: 'Playfair Display', serif;
    --font-for-fun: 'Indie Flower', cursive;;
    --logo-color: #f7e019;
    --js-theme: #f0db4f;
    --react-theme: #61dafb;
    --css-theme: #e31b5f;
    --offtech-theme: #99d98c;
}

html {
    box-sizing: border-box;
    font-size: 100%;
}

*,*::before,*::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

body {
    width: 100%;
    height: 100vh;
    line-height: 1.4;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.smText};
    font-family: var(--font-primary);
}

.container {
    width: 80%;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;

    @media (max-width: 768px) {
        width: 90%;
    }
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

.scroll-tracker {
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background-color: #bb86fc;
    background: linear-gradient(to right, #4262ff, #01baef, #764ba2);
}

.all-posts-link, .all-topics-link {
    width: 11rem;
    margin: auto;
    border-radius: 0.5rem;
    text-align: center;
    margin-bottom: 4rem;

    background-color: inherit;
    color: inherit;
    padding: 5px;
    border-left: 3px solid ${({ theme }) => theme.accentColor};
    box-shadow: ${({ theme }) => theme.boxShadow};
}
`;

export const lightTheme = {
  backgroundColor: "#f5f5f5",
  lgText: "#250902",
  smText: "#151515",
  lightText: "#808080",
  accentColor: "#4262ff",
  externalLink: "#4262ff",
  boxShadow: "inset 0 0 8px rgba(0,0,0,0.2)",
  mobileNavLink: "#ffffffda",
};

export const darkTheme = {
  backgroundColor: "#151515",
  lgText: "#d3cecc",
  smText: "#e9e6e6",
  lightText: "#808080",
  accentColor: "#a1b567",
  externalLink: "#3dffc5",
  boxShadow: "0 0 8px #000",
  mobileNavLink: "#151515",
};
