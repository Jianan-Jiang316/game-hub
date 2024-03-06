import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        
        key: "2c9cdea7bdcb479f92362be66b7dc454"
    }
})