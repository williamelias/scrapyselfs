import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrapingService {

  constructor() { }
  url:string = 'http://127.0.0.1:8000/'

  async getData(){
    try{
      const response = await fetch(this.url)
      console.log(response.status)
      const respJson = await response.json()
      console.log(`response:${respJson}`)
      return respJson
    }
    catch(error){
      console.error(error)
      return {'error': `${error}`}
    }
  }
}
