const key_favoriteCountries = "_favcountries";

export function setFavoriteCountry(countryName) {
  const countries = localStorage.getItem(key_favoriteCountries);
  if (countries)
    localStorage.setItem(key_favoriteCountries, countries + `,${countryName}`);
  else localStorage.setItem(key_favoriteCountries, countryName);
}

export function getFavoriteCountry() {
  const countries = localStorage.getItem(key_favoriteCountries);
  if (countries) return countries.split(",");
  return countries;
}

export function removeFavoriteCountry(countryName) {
  const countries = localStorage.getItem(key_favoriteCountries);
  console.log(countryName, countries);
  if (countries) {
    const newList = countries
      .split(",")
      .filter((country) => country.toLowerCase() !== countryName.toLowerCase())
      .join(",");
    console.log(newList);
    localStorage.setItem(key_favoriteCountries, newList);
  }
}

export function clearLocalStorage() {
  localStorage.clear();
  window.location.reload();
}
