import type { Country } from "@/models/Country"

export interface CountryApiClientEndpoints {
  fetchCountries: () => Promise<Country[]>
}

export interface CountryApiClientOptions {
  endpoints: CountryApiClientEndpoints
}