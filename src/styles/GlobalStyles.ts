import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.base};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    // line-height: 1.6;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  h1, h2, h3 {
    margin: 0 0 ${({ theme }) => theme.spacing.sm};
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: inherit;
  }
`;
