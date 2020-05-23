const axios = require("axios").default;

module.exports = {
  async getAllCountries() {
    try {
      return axios.get("https://restcountries.eu/rest/v2/all");
    } catch (error) {
      return {
        ststu: 500,
        data: "Internal error on service 'getAllCountries' - " + error,
      };
    }
  },

  async getCountriesByName(name) {
    try {
      return axios.get("https://restcountries.eu/rest/v2/name/" + name);
    } catch (error) {
      return {
        ststu: 500,
        data: "Internal error on service 'getCountriesByName' - " + error,
      };
    }
  },
};
