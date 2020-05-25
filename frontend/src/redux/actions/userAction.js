import Type from "redux/types/userType";

export const userLoginAction = ({ userName, country }) => ({
  type: Type.USER_LOGIN,
  userName,
  country,
});

export const userAddCoin = (amount) => ({
  type: Type.USER_ADD_COIN,
  amount,
});

export const userRemoveCoin = (amount) => ({
  type: Type.USER_REMOVE_COIN,
  amount,
});
