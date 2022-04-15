import { createGlobalStyle } from "styled-components";
import NunitoRegular from 'fonts/Nunito-Regular.ttf'
import NunitoBlack from 'fonts/Nunito-Black.ttf'


export const colors = {
    white: "#fff",
    darkGrey: "#1a202c",
    deepdDarkGrey: "#404040",
    blueShape1: "#215973",
    blueShape2: "#6fadc6",
    blueShape3: "#d1e1e9",
}

export const darkTheme = {
    colors: {
        background: colors.darkGrey,
        menuBackground: colors.blueShape1,
        textDark: colors.blueShape3,
        textMain: colors.blueShape2,
        textSecundary: colors.blueShape3,
    }
}

export const lightTheme = {
    colors: {
        background: colors.white,
        menuBackground: colors.blueShape3,
        textDark: colors.blueShape1,
        textMain: colors.blueShape2,
        textSecundary: colors.deepdDarkGrey,
    }
}

export const GlobalStyles = createGlobalStyle`
    :root {
        --site-max-width: 1200px;
    }
    @font-face {
        font-family: "Nunito Regular";
        src: 
        local("Nunito Regular"), local("NunitoRegular"),
        url(${NunitoRegular}) format('ttf');
        font-weight:300;
        font-style:normal;
    }

    @font-face {
        font-family: "Nunito Black";
        src: 
        local("Nunito Black"), local("NunitoBlack"),
        url(${NunitoBlack}) format('ttf');
        font-weight:300;
        font-style:normal;
    }
    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.textSecundary};
        font-family: "Nunito Regular", Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0 20px 80px 20px;
        transition: all 0.5s ease;
    }
    main {
        max-width: 960px;
        margin: 40px auto;
    }

    h1,h2,h3,h4,h5,h6 {
        color: ${props => props.theme.colors.textMain};
        font-family: "Nunito Black", Arial, Helvetica, sans-serif;
        transition: all 0.5 ease;
        letter-spacing: 1px;
    }
    p {
        font-size: 0.9rem;
        line-height: 1.2;

        @media screen and (min-width: 768px){
            font-size: 1.1rem;
            line-height: 1.5;
        }
    }
    h2 {
        font-size: 1rem;
        text-transform: uppercase;
        line-height: 1.8px;

        @media screen and (min-width: 768px){
            font-size: 1.5rem;
        }
    }
    h3 {
        font-size: 0.8rem;
        line-height: 1.5px;
        margin: 30px 0 -15px 0;

        @media screen and (min-width: 768px){
            font-size: 1.2rem;
        }
    }
    a {
        text-decoration: none
    }
`