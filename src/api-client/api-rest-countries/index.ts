import type { ApiClientInterface } from "../models";
import { countryApiClient } from "./Country";

const apiRestCountriesClient: ApiClientInterface = {
  country: countryApiClient
}

export { apiRestCountriesClient }