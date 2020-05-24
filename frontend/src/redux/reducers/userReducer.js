import Type from "redux/types/userType";

export const initialState = {
  userName: undefined,
  userCountry: {},
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case Type.USER_LOGIN:
      return {
        ...state,
        userName: action.userName,
        userCountry: action.country,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};

export default user;
