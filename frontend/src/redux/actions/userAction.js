import Type from "redux/types/userType";

export const userLoginAction = ({ userName, country }) => ({
  type: Type.USER_LOGIN,
  userName,
  country,
});
