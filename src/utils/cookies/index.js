import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

// 쿠키 가져오기 함수
export const getCookie = (name) => {
  return cookies.get(name);
};

// 쿠키 제거 함수
export const removeCookie = (name) => {
  return cookies.remove(name);
};
