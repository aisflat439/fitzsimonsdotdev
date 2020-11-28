import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.palette.alternate.lowlight};
  }
  body, a {
    color: ${({ theme }) => theme.palette.main.base};
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
