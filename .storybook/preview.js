// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
import React from "react";
import { addDecorator, addParameters } from "@storybook/react"
import theme from '../src/theme'
import { ThemeProvider } from "styled-components";
import '../src/story.css'
//进行项目配置
addDecorator(storyFn =>
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)
//设置分组
addParameters({
  options: {
    showRoot: true
  }
})
