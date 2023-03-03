import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api";

const SearchBar = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  // Method to retrieve input value
  const loadOptions = (inputValue) => {
    return fetch(
      // TODO: Add additional refinement
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              //
              value: `${city.latitude} ${city.longitude}`,
              // TODO: Add in Population size: ${city.population}
              // Label printed to search bar are the names and countryCode
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      // Limited to API call delay of 600ms after each key press
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      className="m-auto mb-0 max-w-[720px]"
    />
  );
};

export default SearchBar;
