import type { ApiClientInterface } from "./models";
import { apiRestCountriesClient } from "./rest-countries";

const apiClient: ApiClientInterface = apiRestCountriesClient

export { apiClient }