import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: false,
});
export const physicalState = atom({
  key: "physicalState",
  default: false,
});

export const loginState = atom({
  key: "loginState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const avgState = atom({
  key: "avgState",
  default: 50,
});
