import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  /*useColorMode()是chakra-ui提供的一个钩子函数，里面构建了一个对象，
    这里是用解构赋值边声明边赋值了两个属性， 一个是toggleColorMode，另一个是colorMode 
  */

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={
          colorMode === "dark"
        } /*在开关中表示开关开着的意思， 这行代码的意思是当是dark的时候，开关是开着的状态*/
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
