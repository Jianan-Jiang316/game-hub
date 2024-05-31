import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark"
}
/*
首先，通过 import 语句从 @chakra-ui/react 库中导入了 extendTheme 和 ThemeConfig 两个成员，其中 extendTheme 是一个函数，用于扩展 Chakra UI 主题，而 ThemeConfig 是主题配置的类型。

然后，定义了一个名为 config 的常量，其类型为 ThemeConfig。在这里，config 对象指定了主题的初始配置，其中 initialColorMode 属性被设置为 "dark"，表示初始颜色模式为暗色模式。

接着，使用 extendTheme 函数创建了一个自定义主题，将 config 对象传递给该函数作为参数。这样，我们就根据 config 对象的配置来扩展了主题。

最后，通过 export default 将创建的自定义主题导出，以便在其他文件中使用。

*/
const theme = extendTheme({config,colors:{gray:{
    50:"#f9f9f9",
    100:"#ededed",
    200:"#d3d3d3",
    300: "#b3b3b3",
    400: "#a0a0a0",
    500:"#898989",
    600: "#6c6c6c",
    700: "#202020",
    800: "#121212",
    900:"#111"

}}});

export default theme;