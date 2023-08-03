import jwtDecode from "jwt-decode";
import { getUser } from "../../utils/localstorage";

export const getLoginUserData = (jwtToken) => {
  const decodedUserInfo = jwtDecode(jwtToken);
  localStorage.setItem("userInfo", JSON.stringify(decodedUserInfo));

  console.log(decodedUserInfo);
};
