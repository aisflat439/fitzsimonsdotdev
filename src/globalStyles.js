import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, a {
    color: ${({ theme }) => theme.palette.main.base};
  }
  a {
    text-decoration: none;
    color: #26a69a;
  }
`;

export default GlobalStyle;
