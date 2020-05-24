import request from "./apiRequest";

export const getCountriesApi = async () => {
  try {
    const { data, status } = await request.post("/countries");

    return { data: data, status: status };
  } catch (error) {
    return {
      data: error?.response?.data || "Internal Error",
      status: error?.response?.status || 500,
    };
  }
};

export const getCountryByNameApi = async ({ countryName }) => {
  try {
    const { data, status } = await request.get(
      `/countries?names=${countryName}`
    );
    return { data: data, status: status };
  } catch (error) {
    return {
      data: error?.response?.data || "Internal Error",
      status: error?.response?.status || 500,
    };
  }
};

export const getCountriesByNamesApi = async (countriesNames) => {
  try {
    const { data, status } = await request.get(
      `/countries?names=${countriesNames}`
    );
    return { data: data, status: status };
  } catch (error) {
    return {
      data: error?.response?.data || "Internal Error",
      status: error?.response?.status || 500,
    };
  }
};
