// src/index.tsx
import React from "react";

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D"
};

// src/index.tsx
function App() {
  return /* @__PURE__ */ React.createElement("h1", {
    style: { color: colors.ignite300 }
  }, "Hello World!");
}
export {
  App
};
