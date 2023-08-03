import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:9000", //Change url after deploying
});

export default instance;
