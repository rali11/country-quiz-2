import type { Country } from "@/models/Country";

export interface CountryApiClientInterface {
  fetchCountries: () => Promise<Country[]>
}