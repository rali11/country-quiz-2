export class Country {
  #name
  #urlFlag
  #capitalName

  constructor(name, urlFlag, capitalName){
    this.#name = name
    this.#urlFlag = urlFlag
    this.#capitalName = capitalName
  }

  getName(){
    return this.#name
  }

  getCapitalName(){
    return this.#capitalName
  }

  getUrlFlag(){
    return this.#urlFlag
  }
}