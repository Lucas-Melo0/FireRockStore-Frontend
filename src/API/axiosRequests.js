import { axiosBase } from "./axiosBase";

const userSignup = (data) => {
  return axiosBase.post("/signup", data);
};
const userSignin = (data) => {
  return axiosBase.post("/login", data);
};

export { userSignup, userSignin };
