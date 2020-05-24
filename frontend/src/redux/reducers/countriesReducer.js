import Type from "redux/types/countriesType";
import defaultCountry from "constants/defaultCountry";
import { setFavoriteCountry, removeFavoriteCountry } from "utils/localStorage";

export const initialState = {
  countriesList: [],
  favoriteCountries: [],
  currentCountry: defaultCountry,
  loading: false,
  error: {
    status: false,
    message: undefined,
  },
};

export const countries = (state = initialState, action) => {
  switch (action.type) {
    case Type.COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Type.COUNTRIES_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case Type.COUNTRIES_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          message: action.message || "Unknow error",
        },
      };

    case Type.COUNTRIES_SET_ALL_COUNTRIES:
      return {
        ...state,
        countriesList: action.countries || [],
      };

    case Type.COUNTRIES_SET_FAVORITE_LIST_COUNTRIES:
      return {
        ...state,
        favoriteCountries: Array.isArray(action.countries)
          ? action.countries
          : [action.countries],
      };

    case Type.COUNTRIES_SET_FAVORITE_COUNTRY:
      setFavoriteCountry(state.currentCountry.name);
      return {
        ...state,
        favoriteCountries: [...state.favoriteCountries, state.currentCountry],
      };

    case Type.COUNTRIES_REMOVE_FAVORITE_COUNTRY:
      removeFavoriteCountry(state.currentCountry.name);
      return {
        ...state,
        favoriteCountries: state.favoriteCountries.filter(
          (country) => country.name !== state.currentCountry.name
        ),
      };

    case Type.COUNTRIES_CLEAR_FAVORITE_COUNTRY:
      removeFavoriteCountry(state.currentCountry.name);
      return {
        ...state,
        favoriteCountries: [],
      };

    case Type.COUNTRIES_SET_CURRENT_COUNTRY:
      return {
        ...state,
        loading: false,
        currentCountry: action.country,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};

export default countries;
