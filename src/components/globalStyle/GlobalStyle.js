import { createGlobalStyle } from 'styled-components';
import bgImg from '../../images/bg.png';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(${bgImg}) center no-repeat;  
    background-size: cover;
    color: #fff;
    padding: 0;
    margin: 0;
    font-family: 'Julius Sans One', serif;
  }
`;
