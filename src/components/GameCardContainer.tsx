import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
/*
在 React 中，children 是一个特殊的属性，它表示组件的子元素
当一个组件包含了其他组件作为其子元素时，这些子元素会被作为 children 属性传递给父组件
*/

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="220px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
