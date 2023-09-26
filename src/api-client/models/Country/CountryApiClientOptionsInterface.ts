import type { CountryInterface } from "@/models/Country/CountryInterface"

export interface CountryApiClientEndpoints {
  fetchCountries: () => Promise<CountryInterface[]>
}

export interface CountryApiClientOptions {
  endpoints: CountryApiClientEndpoints
}