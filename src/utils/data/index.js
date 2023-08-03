import jwtDecode from "jwt-decode";

export const getLoginUserData = (jwtToken) => {
  const decodedUserInfo = jwtDecode(jwtToken);
  localStorage.setItem("userInfo", JSON.stringify(decodedUserInfo));
};
