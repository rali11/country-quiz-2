export class Country {
  #countryName
  #capitalName
  #flagImageUrl

  constructor(countryName, capitalName, flagImageUrl){
    this.countryName = countryName
    this.capitalName = capitalName
    this.flagImageUrl = flagImageUrl
  }

  getCountryName(){
    return this.id
  }

  getCapitalName(){
    return this.capitalName
  }

  getFlagImageUrl(){
    return this.flagImageUrl
  }
}