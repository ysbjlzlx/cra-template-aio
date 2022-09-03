import { createTheme } from '@mui/material/styles';

/**
 * 全局主题设置，需要在入口文件中引入 <CssBaseline />
 */

const globalTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: {
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
          fontVariantNumeric: 'tabular-nums',
        },
      }),
    },
  },
});

export default globalTheme;
