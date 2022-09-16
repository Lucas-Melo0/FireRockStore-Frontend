import { axiosBase } from "./axiosBase";

const userSignup = (data) => {
  return axiosBase.post("/signup", data);
};
const userSignin = (data) => {
  return axiosBase.post(data);
};

export { userSignup, userSignin };
