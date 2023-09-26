import type { CountryInterface } from "@/models/Country/CountryInterface";
import type { CountryApiClientInterface } from "./CountryApiClientInterface";
import type { CountryApiClientEndpoints, CountryApiClientOptions } from "./CountryApiClientOptionsInterface";

export class CountryApiClientModel implements CountryApiClientInterface {
  private readonly endpoints!: CountryApiClientEndpoints

  constructor(options: CountryApiClientOptions){
    this.endpoints = options.endpoints
  }

  async fetchCountries(): Promise<CountryInterface[]>{
    return await this.endpoints.fetchCountries()
  }
}