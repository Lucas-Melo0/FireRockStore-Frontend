import { axiosBase } from "./axiosBase";

const userSignup = (data) => {
  return axiosBase.post("/signup", data);
};
const userSignin = (data) => {
  return axiosBase.post("/login", data);
};

const orderCheckout = (data) => {
  return axiosBase.post("/order", data);
};

export { userSignup, userSignin, orderCheckout };
