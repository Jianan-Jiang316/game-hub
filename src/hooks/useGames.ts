
import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Platform{
  id: number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;
    rating_top: number;
  }
  
  
/*const useGames = () => { return useData<Game>("/games")
    
 }*/

/*
1.这里的两行代码的逻辑是一模一样的， 但是上面的代码用{ }标出了{代码体}
所以你要接住useData返回的值， 就必须要有return 
2. 而下面这行代码，去掉了{ }表示代码块，代码块中只有一行代码， 可以直接省略{}，
这样省略的结果就是， 直接接住了useData返回的值， 不用多加return 

*/
const useGames = (gameQuery: GameQuery) => 
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => 
      apiClient
        .get<FetchResponse<Game>>('/games', {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
          },
        })
        .then(res => res.data)
  })


export default useGames;