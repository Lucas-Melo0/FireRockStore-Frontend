import { axiosBase } from "./axiosBase";

const userSignup = (data) => {
  return axiosBase.post(data);
};
const userSignin = (data) => {
  return axiosBase.post(data);
};

export { userSignup, userSignin };
