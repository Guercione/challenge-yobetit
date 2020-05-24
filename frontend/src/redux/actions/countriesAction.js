import Type from "redux/types/countriesType";

export const countriesSetFavoriteCountryAction = () => ({
  type: Type.COUNTRIES_SET_FAVORITE_COUNTRY,
});

export const countriesRemoveFavoriteCountryAction = () => ({
  type: Type.COUNTRIES_REMOVE_FAVORITE_COUNTRY,
});

export const countriesSetCurrentCountryAction = (country) => ({
  type: Type.COUNTRIES_SET_CURRENT_COUNTRY,
  country,
});

export const countriesGetUniqueCountryAction = (countryName) => ({
  type: Type.COUNTRIES_GET_UNIQUE_COUNTRY_SAGA,
  countryName,
});

export const countriesGetListCountriesAction = (countriesList) => ({
  type: Type.COUNTRIES_GET_LIST_COUNTRIES_SAGA,
  countriesList,
});

export const countriesGetAllCountriesAction = () => ({
  type: Type.COUNTRIES_GET_ALL_COUNTRIES_SAGA,
});
