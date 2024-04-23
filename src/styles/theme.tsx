import { createTheme, Theme } from '@mui/material/styles';
// import { Breakpoint } from '@mui/material/styles/createBreakpoints';

declare module '@mui/material/styles' {
  interface Theme {
    breakpoints: {
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
      down: (key: keyof Theme['breakpoints']['values'] | number) => string;
    };
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    down: (key: keyof Theme['breakpoints']['values'] | number) => {
      if (typeof key === 'number') {
        // Handle numerical values
        return `@media (max-width:${key}px)`;
      } else {
        // Handle breakpoint keys
        return `@media (max-width:${theme.breakpoints.values[key]}px)`;
      }
    },
  },
  // Other theme customizations
});

export default theme;
