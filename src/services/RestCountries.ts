import type { RESTCountries } from '@/.d.ts';
import type { Country } from '@/models/Country'

export const getCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) throw new Error(response.statusText);
    const json = await response.json();
    return json.map(getListCountries);
  } catch (error) {
    console.log(error)
  }
}

const getListCountries = (item: RESTCountries): Country => {
  return {
    name:item.name.common,
    urlFlag:item.flags.png,
    capitalName:item.capital ? item.capital[0] : item.name.common
  }
}


