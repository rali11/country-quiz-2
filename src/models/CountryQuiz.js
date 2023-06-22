import { getCountries } from "../services/RestCountries";
import { getRandomInt } from "../shared/Utils";

const questionTemplate = {
  CAPITAL_COUNTRY: 'is the capital of',
  FLAG_COUNTRY: 'Which country does this flag belong to?'
}
Object.freeze(questionTemplate)

class CountryQuiz {
  #countryList = []
  #correctAnswers = 0

  constructor(countryList){
    this.#countryList = countryList
  }

  async resetQuiz(){
    this.#correctAnswers = 0
    this.#countryList = await getCountries()
  }

  addCorrectAnswer(){
    this.#correctAnswers += 1
  }

  getCorrectAnswers(){
    return this.#correctAnswers
  }

  getCapitalQuestion(){
    const choices = this.#getChoices()
    const correctChoice = choices.find(choice => choice.correct)
    const correctCountry = this.#countryList[correctChoice.value]
    const question = `${correctCountry.getCapitalName()} ${questionTemplate.CAPITAL_COUNTRY}`

    this.#countryList.splice(correctChoice.value, 1)

    return {choices, question}
  }

  getFlagQuestion(){
    const choices = this.#getChoices()
    const correctChoice = choices.find(choice => choice.correct)
    const question = questionTemplate.FLAG_COUNTRY
    const flagImageUrl = this.#countryList[correctChoice.value].getFlagImageUrl()

    this.#countryList.splice(correctChoice.value, 1)
    
    return {choices, question, flagImageUrl}
  }

  #getChoices(){
    const choices = [];    
    const notAvailableChoices = [];
    const choicesLength = 4;
    for (let i = 0; i < choicesLength; i++) {
      const randomIndex = getRandomInt(this.#countryList.length, notAvailableChoices);     
      choices.push({
        label: this.#countryList[randomIndex].getCountryName(),
        correct: false,
        value: randomIndex,
      })
      notAvailableChoices.push(randomIndex);
    }
    choices[getRandomInt(choicesLength)].correct = true;

    return choices;
  }
}

const getCountryQuiz = async () => {
  const countryList = await getCountries()
  return new CountryQuiz(countryList)
}

export default await getCountryQuiz()