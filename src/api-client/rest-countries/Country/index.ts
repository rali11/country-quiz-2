import type { RESTCountries } from "@/.d.ts";
import { type CountryApiClientInterface, CountryApiClientModel, type CountryApiClientOptions } from "@/api-client/models";
import type { Country } from "@/models/Country";

const options: CountryApiClientOptions = {
  endpoints: {
    async fetchCountries(): Promise<Country[]>{
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json() as RESTCountries[];
      return json.filter(filterCapital).map(getListCountries);
    }
  }
}

function getListCountries(item: RESTCountries): Country{
  return {
    name:item.name.common,
    urlFlag:item.flags.png,
    capitalName:item.capital ? item.capital[0] : ''
  }
}

function filterCapital(item: RESTCountries): boolean {
  return item.capital !== undefined
}

const countryApiClient: CountryApiClientInterface = new CountryApiClientModel(options)

export { countryApiClient }