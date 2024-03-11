import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "./Services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  /*
  这里的花括号用于从 useGenres() 返回的对象中提取 data 属性并赋值给一个名为 data 的变量
  useGenres() 函数返回的对象中的 data 属性的值被提取出来，并且赋值给了一个新创建的变量 data。这个过程称为解构赋值。

  所以，data 变量不是直接从 useGenres() 返回的对象中的 data 属性引用过来的，
  而是 data 属性的值被复制到了一个新的变量 data 上。
  这样，你可以在后续的代码中直接使用这个新的 data 变量，而不需要再通过 useGenres() 返回的对象来访问它
  */
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
    /*
    1.这里的{ }是JSX 中的花括号语法，用于插入 JavaScript 表达式。
    在这种情况下，花括号 { } 内部的部分是 JavaScript 表达式，用于在 JSX 中动态地生成内容
    2..map() 是 JavaScript 数组的一个方法。它用于创建一个新数组，该数组的元素是调用传入的函数对原始数组中
    的每个元素进行处理后的结果。
    在 React 中，通常会将这个方法用于渲染列表
    
    */
  );
};

export default GenreList;
