import instance from "./axios/instance.js"



const fetchData=(route)=>{
    return instance.get(route);
}

export default fetchData