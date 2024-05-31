import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        /*
        HTML <form> 标签确实可以包含一个 onSubmit 属性，但它并不是必需的。onSubmit 属性用于指定在提交表单时执行的 JavaScript 函数。
        这使得开发者能够在用户提交表单之前执行验证或其他自定义操作。
        如果不需要在提交时执行任何 JavaScript 操作，那么可以省略 onSubmit 属性。
        */
        event.preventDefault(); /*这里是阻止自动提交表单到服务器*/
        if (ref.current) onSearch(ref.current.value);
        /*
        如果if后面只有一条语句，可以不加大括号，但是如果有两条语句及以上，
        就必须要加大括号了
        */
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
