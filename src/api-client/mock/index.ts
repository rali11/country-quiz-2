import type { ApiClientInterface } from "../models";
import { countryApiClient } from "./Country";

const apiMockCountriesClient: ApiClientInterface = {
  country: countryApiClient
}

export { apiMockCountriesClient}