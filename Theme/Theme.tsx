// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// ** #0C2236

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: {
      "html, body": {
        backgroundColor: "white",
        lineHeight: "tall",
      },
      a: {
        color: "teal.500",
      },
    },
  },
});

export default theme;
