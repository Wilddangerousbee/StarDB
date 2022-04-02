class SwapiService {
    _urlBase = "https://swapi.dev/api"

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

  getPerson(id){
    return this.getReesourse(`/people/${id}`);
  }

  async getAllStarships(){
    const result = await this.getReesourse(`/starships/`);
    return result.results;
  }

  getStarship(id){
    return this.getReesourse(`/starships/${id}`);
  }
}

const swapi = new SwapiService();

swapi.getStarship(3)
  .then(person => {
    console.log(person.name);
  })

