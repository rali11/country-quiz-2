import type { CountryInterface } from "@/models/Country/CountryInterface";

export interface CountryApiClientInterface {
  fetchCountries: () => Promise<CountryInterface[]>
}