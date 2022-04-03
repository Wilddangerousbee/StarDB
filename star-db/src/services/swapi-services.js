export default class SwapiService {
    _urlBase = "https://swapi.dev/api";
    _urlBasePicturePlanet = "https://starwars-visualguide.com/assets/img/planets/";
    _urlBasePictureStarship = "https://starwars-visualguide.com/assets/img/starships/";
    _urlBasePicturePerson = "https://starwars-visualguide.com/assets/img/characters/";

   async getReesourse(url) {
    const response = await fetch(`${this._urlBase}${url}`);
  
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);      
    }
  
    const body = await response.json();
    return body;
  }

  async getAllPeople(){
    const result = await this.getReesourse(`/people/`);
    return result.results;
  }

  async getPerson(id){
    const person = await this.getReesourse(`/people/${id}`);
    return this._transformPerson(person)
  }

  async getAllStarships(){
    const result = await this.getReesourse(`/starships/`);
    return result.results;
  }

  async getStarship(id){
    const starship = await this.getReesourse(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  async getAllPlanets(){
    const result = await this.getReesourse(`/planets/`);
    return result.results;
  }

  async getPlanet(id){
    const planet = await this.getReesourse(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  _getIdFromUrl(url){
    const idRegExp = /\/([0-9]*)\/$/;
    return url.match(idRegExp)[1];
  }

  _transformPlanet(planet){
     return {
      urlPicture: `${this._urlBasePicturePlanet}${this._getIdFromUrl(planet.url)}.jpg`,
      pupulstion: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      name: planet.name
    }
  }

  _transformStarship(starship){
    return {
     urlPicture: `${this._urlBasePictureStarship}${this._getIdFromUrl(starship.url)}.jpg`,
     name: starship.name,
     model: starship.model,
     manufacturer: starship.manufacturer,
     costInCredits: starship.cost_in_credits, 
     length: starship.length,
     crew: starship.crew,
     passengers: starship.passengers,
     cargoCapacity: starship.cargo_capacity
   }
  }

   _transformPerson(person){
      return {
      urlPicture: `${this._urlBasePicturePerson}${this._getIdFromUrl(person.url)}.jpg`,
      name: person.name,
      eyeColor: person.eye_color,
      birthYear: person.birth_year,
      gender: person.gender,
    }
  }
}