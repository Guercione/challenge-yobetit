import Type from "redux/types/userType";

export const initialState = {
  userName: undefined,
  userCountry: {},
  coins: 20,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case Type.USER_LOGIN:
      return {
        ...state,
        userName: action.userName,
        userCountry: action.country,
      };

    case Type.USER_ADD_COIN:
      return {
        ...state,
        coins: action.amount > 0 ? action.amount + state.coins : state.coins,
      };

    case Type.USER_REMOVE_COIN:
      const result = state.coins - (action.amount || 0);
      return {
        ...state,
        coins: result > 0 ? result : 0,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};

export default user;
