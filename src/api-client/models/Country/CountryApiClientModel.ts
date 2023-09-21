import type { Country } from "@/models/Country";
import type { CountryApiClientInterface } from "./CountryApiClientInterface";
import type { CountryApiClientEndpoints, CountryApiClientOptions } from "./CountryApiClientOptionsInterface";

export class CountryApiClientModel implements CountryApiClientInterface {
  private readonly endpoints!: CountryApiClientEndpoints

  constructor(options: CountryApiClientOptions){
    this.endpoints = options.endpoints
  }

  async fetchCountries(): Promise<Country[]>{
    return await this.endpoints.fetchCountries()
  }
}