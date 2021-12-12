import axios from "axios";

const instance=axios.create({
    baseURL:"https://kontests.net/api/v1/"
})
export default instance;