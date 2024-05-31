import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
/*
Props 接口定义了组件接受的属性结构。在这里，它指定了 children 属性的类型为 ReactNode，
这是一个泛型类型，用于表示 React 节点。
*/

const GameCardContainer = ({ children }: Props) => {
  /*GameCardContainer 组件接受一个名为 children 的属性，其类型由 Props 接口定义。
  通过对象解构，从 Props 接口中获取到 children 属性。*/
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
    /*
    在组件内部，它返回一个 Box 组件，假设来自于像 Material-UI 这样的 UI 库。
    这个 Box 组件设置了 borderRadius 为 10，overflow 为 "hidden"。
    */
    /*
   children 属性被渲染在 Box 组件内部。这意味着任何作为 GameCardContainer
   的子组件或子元素传入的内容都会被渲染在 Box 内部。
   */
  );
};

export default GameCardContainer;
