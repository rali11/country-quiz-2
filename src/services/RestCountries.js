import { Country } from '@/models/Country'

export const getCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) throw new Error(response.statusText);
    const json = await response.json();
    return json.filter(item => item.capital?.length > 0).map(item => {
      return new Country(item.name.common, item.flags.png, item.capital[0])
    });
  } catch (error) {
    console.log(error)
  }
}
