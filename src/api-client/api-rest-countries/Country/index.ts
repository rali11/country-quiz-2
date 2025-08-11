import type { RESTCountries } from "@/.d.ts";
import { type CountryApiClientInterface, CountryApiClientModel, type CountryApiClientOptions } from "@/api-client/models";
import type { CountryInterface } from "@/models/Country/CountryInterface";

const options: CountryApiClientOptions = {
  endpoints: {
    async fetchCountries(): Promise<CountryInterface[]>{
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags');
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json() as RESTCountries[];
      return json.filter(filterCapital).map(getListCountries);
    }
  }
}

const getListCountries = (item: RESTCountries): CountryInterface =>{
  return {
    name:item.name.common,
    urlFlag:item.flags.png,
    capitalName:item.capital ? item.capital[0] : ''
  }
}

const filterCapital = (item: RESTCountries): boolean => {
  return item.capital !== undefined
}

const countryApiClient: CountryApiClientInterface = new CountryApiClientModel(options)

export { countryApiClient }