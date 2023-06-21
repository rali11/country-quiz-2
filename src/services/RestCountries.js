import { Country } from '@/models/Country'

export const getCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) throw new Error(response.statusText);
    const json = await response.json();
    return json.map(item => {
      return new Country(item.name.common, item.capital[0], item.flags.png)
    });
  } catch (error) {
    console.log(error)
  }
}
