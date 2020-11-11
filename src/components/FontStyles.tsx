import { createGlobalStyle } from "styled-components"

// TODO: only serve the ones i end up using

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Monique';
    src: url('./fonts/Monique-Bold.eot');
    src: url('./fonts/Monique-Bold.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Monique-Bold.woff2') format('woff2'),
    url('./fonts/Monique-Bold.svg#Monique-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Monique-Round20';
    src: url('./fonts/Monique-BoldRound20.eot');
    src: url('./fonts/Monique-BoldRound20.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Monique-BoldRound20.woff2') format('woff2'),
    url('./fonts/Monique-BoldRound20.svg#Monique-BoldRound20') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Monique-Round40';
    src: url('./fonts/Monique-BoldRound40.eot');
    src: url('./fonts/Monique-BoldRound40.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Monique-BoldRound40.woff2') format('woff2'),
    url('./fonts/Monique-BoldRound40.svg#Monique-BoldRound40') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Monique';
    src: url('./fonts/Monique-RegularOblique.eot');
    src: url('./fonts/Monique-RegularOblique.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Monique-RegularOblique.woff2') format('woff2'),
    url('./fonts/Monique-RegularOblique.svg#Monique-RegularOblique') format('svg');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Monique-Round20';
    src: url('./fonts/Monique-RegularObliqueRound20.eot');
    src: url('./fonts/Monique-RegularObliqueRound20.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Monique-RegularObliqueRound20.woff2') format('woff2'),
    url('./fonts/Monique-RegularObliqueRound20.svg#Monique-RegularObliqueRound20') format('svg');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Monique-Round40';
    src: url('./fonts/Monique-RegularObliqueRound40.eot');
    src: url('./fonts/Monique-RegularObliqueRound40.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Monique-RegularObliqueRound40.woff2') format('woff2'),
    url('./fonts/Monique-RegularObliqueRound40.svg#Monique-RegularObliqueRound40') format('svg');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Monique';
    src: url('./fonts/Monique-BoldOblique.eot');
    src: url('./fonts/Monique-BoldOblique.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Monique-BoldOblique.woff2') format('woff2'),
    url('./fonts/Monique-BoldOblique.svg#Monique-BoldOblique') format('svg');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Monique-Round20';
    src: url('./fonts/Monique-BoldObliqueRound20.eot');
    src: url('./fonts/Monique-BoldObliqueRound20.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Monique-BoldObliqueRound20.woff2') format('woff2'),
    url('./fonts/Monique-BoldObliqueRound20.svg#Monique-BoldObliqueRound20') format('svg');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Monique-Round40';
    src: url('./fonts/Monique-BoldObliqueRound40.eot');
    src: url('./fonts/Monique-BoldObliqueRound40.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Monique-BoldObliqueRound40.woff2') format('woff2'),
    url('./fonts/Monique-BoldObliqueRound40.svg#Monique-BoldObliqueRound40') format('svg');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Monique';
    src: url('./fonts/Monique-Regular.eot');
    src: url('./fonts/Monique-Regular.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Monique-Regular.woff2') format('woff2'),
    url('./fonts/Monique-Regular.svg#Monique-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Monique-Round20';
    src: url('./fonts/Monique-RegularRound20.eot');
    src: url('./fonts/Monique-RegularRound20.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Monique-RegularRound20.woff2') format('woff2'),
    url('./fonts/Monique-RegularRound20.svg#Monique-RegularRound20') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Monique-Round40';
    src: url('./fonts/Monique-RegularRound40.eot');
    src: url('./fonts/Monique-RegularRound40.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Monique-RegularRound40.woff2') format('woff2'),
    url('./fonts/Monique-RegularRound40.svg#Monique-RegularRound40') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`