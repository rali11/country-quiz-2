import type { RESTCountries } from '@/.d.ts';
import type { Country } from '@/models/Country'

export const getCountries = async ()  => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  if (!response.ok) throw new Error(response.statusText);
  const json = await response.json() as RESTCountries[];
  return json.filter(filterCapital).map(getListCountries);
}

const getListCountries = (item: RESTCountries): Country => {
  return {
    name:item.name.common,
    urlFlag:item.flags.png,
    capitalName:item.capital ? item.capital[0] : ''
  }
}

const filterCapital = (item: RESTCountries) => {
  return item.capital !== undefined
}


