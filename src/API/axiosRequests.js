import { axiosBase } from "./axiosBase";

const userSignup = (data) => {
  return axiosBase.post("/signup", data);
};
const userSignin = (data) => {
  return axiosBase.post("/login", data);
};

const getProducts = () => {
  return axiosBase.get("/");
};

export { userSignup, userSignin, getProducts };
