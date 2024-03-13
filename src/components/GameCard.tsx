import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
/*
每一个函数组件中的interface Props {
}这句都是在定义这个组件需要接收哪些属性，以及这些属性的值
这里是表示这个函数组件需要接收一个game属性，其类型是Game
*/

const GameCard = ({ game }: Props) => {
  /*
  这里的参数是接收一个对象并解构赋值他的game属性到一个新的变量game, 这个
  新变量game, 符合之前Props接收值的定义，即game的属性为Game
  */
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
