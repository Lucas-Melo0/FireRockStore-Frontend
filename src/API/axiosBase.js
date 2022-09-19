import axios from "axios";

const axiosBase = axios.create({ baseURL: "https://firerock.herokuapp.com/" });

export { axiosBase };
