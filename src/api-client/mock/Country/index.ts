import { type CountryApiClientInterface, CountryApiClientModel, type CountryApiClientOptions } from "@/api-client/models";
import type { CountryInterface } from "@/models/Country/CountryInterface";

const options: CountryApiClientOptions = {
  endpoints: {
    async fetchCountries(): Promise<CountryInterface[]>{
      return new Promise(resolve => {
        const countries: CountryInterface[] = [
          {name: 'Italia', urlFlag:'https://flagcdn.com/w320/it.png', capitalName: 'Rome'},
          {name: 'France', urlFlag:'https://flagcdn.com/w320/fr.png', capitalName: 'Paris'},
          {name: 'Mexico', urlFlag:'https://flagcdn.com/w320/mx.png', capitalName: 'Mexico City'},
        ]
        resolve(countries) 
      })
    }
  }
}

const countryApiClient: CountryApiClientInterface = new CountryApiClientModel(options)

export {
  countryApiClient
}