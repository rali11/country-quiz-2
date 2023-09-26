import type { ApiClientInterface } from "./models";
import { apiRestCountriesClient } from "./api-rest-countries";
import { apiMockCountriesClient } from "./mock";

const apiClient: ApiClientInterface = apiRestCountriesClient
//const apiClient: ApiClientInterface = apiMockCountriesClient

export { apiClient }