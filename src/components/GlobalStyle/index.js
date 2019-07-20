import { createGlobalStyle } from "styled-components"
import AtlasGroteskMedium from "./fonts/AtlasGrotesk-Medium-Web.ttf"
import AtlasGroteskLight from "./fonts/AtlasGrotesk-Light.otf"
import AtlasGroteskRegular from "./fonts/AtlasGrotesk-Regular.otf"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: AtlasGrotesk-Regular;
        src: url(${AtlasGroteskRegular}) format("opentype");
    }
    @font-face {
        font-family: AtlasGrotesk-Medium;
        src: url(${AtlasGroteskMedium}) format("truetype");
    }
    @font-face {
        font-family: AtlasGrotesk-Light;
        src: url(${AtlasGroteskLight}) format("opentype");
    }
    * {
        font-family: AtlasGrotesk-Medium;
    }
    html,body {
        height: 100%;
        width: 100%;
        margin: 0;
    }
    body {
        box-sizing: border-box;
        padding: 50px;
    }
`
