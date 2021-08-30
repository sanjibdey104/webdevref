import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --font-primary: 'Montserrat', sans-serif;
    --font-secondary: 'Playfair Display', serif;
    --logo-color: #f7e019;
    --js-theme: #f0db4f;
    --css-theme: #e31b5f;
    --react-theme: #61dafb;
    --nextjs-theme: #ffaa00;
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
    color: ${({ theme }) => theme.fgLight};
    font-family: var(--font-primary);
}

.container {
    width: 75%;
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

button, input, textarea {
    font-family: var(--font-primary);
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

.all-posts-link {
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
    background-color: ${({ theme }) => theme.surfaceElevation};
}
`;

export const lightTheme = {
  backgroundColor: "#f5f5f5",
  surfaceElevation: "#f2f2f2",
  fgBold: "#212121",
  fgLight: "#424242",
  fgLighter: "#616161",
  fgLightest: "#adb5bd",
  accentColor: "#4262ff",
  accentColorLighter: "#4262ff1a",
  boxShadow: "inset 0 0 3px rgba(0,0,0,0.15), 0 0 5px rgba(0,0,0,0.2)",
  mobileNavLink: "#ffffffda",
};

export const darkTheme = {
  backgroundColor: "#121212",
  surfaceElevation: "#252628",
  fgBold: "#d3cecc",
  fgLight: "#d1d5db",
  fgLighter: "#ffffffb3",
  fgLightest: "#808080",
  accentColor: "#ca4860",
  accentColorLighter: "#ca48601a",
  boxShadow: "0 0 8px rgba(0,0,0,0.75), 0 0 10px rgba(0,0,0,0.15)",
  mobileNavLink: "#151515",
};
