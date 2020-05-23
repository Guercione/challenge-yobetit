const CountrieService = require("../services/CountriesService");
const HandleHttpError = require("../utils/handleHttpError");

async function getAllCountries({ request, response }) {
  try {
    const service = await CountrieService.getAllCountries();
    return response.status(service.status).json(service.data);
  } catch (error) {
    if (!error.response) return HandleHttpError({ request, response, error });
    return response.status(error.response.status).json(error.response.data);
  }
}

async function getUniqueCountryByName({ request, response, countryName }) {
  try {
    const service = await CountrieService.getCountriesByName(countryName);
    return response.status(service.status).json(service.data[0]);
  } catch (error) {
    if (!error.response) return HandleHttpError({ request, response, error });
    return response.status(error.response.status).json(error.response.data);
  }
}

async function getCountriesByNames({ request, response, countriesNames }) {
  try {
    countriesNames = countriesNames.map((country) =>
      country.replace(/[^a-zA-Z]/g, "").toLowerCase()
    );

    const service = await CountrieService.getAllCountries();
    const countriesMatch = service.data.filter((country) =>
      countriesNames.some((item) => country.name.toLowerCase().includes(item))
    );

    return response.status(service.status).json(countriesMatch);
  } catch (error) {
    if (!error.response) return HandleHttpError({ request, response, error });
    return response.status(error.response.status).json(error.response.data);
  }
}

module.exports = {
  async getCountries(request, response) {
    try {
      const { names } = request.query;

      if (!names) return await getAllCountries({ request, response });

      const countriesNames = names.split(",");

      if (countriesNames.length === 1)
        return await getUniqueCountryByName({
          request,
          response,
          countryName: names,
        });

      if (countriesNames.length > 1)
        return await getCountriesByNames({
          request,
          response,
          countriesNames,
        });

      return HandleHttpError({
        code: 400,
        request,
        response,
        error: "Wrong query",
      });
    } catch (error) {
      return HandleHttpError({ code: 500, request, response, error });
    }
  },
};
