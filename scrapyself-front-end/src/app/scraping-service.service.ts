import { Injectable } from '@angular/core';
import { ScrapingInstance } from './scraping-instance';

@Injectable({
  providedIn: 'root'
})
export class ScrapingService {

  url: string = 'http://127.0.0.1:8000/'
  headers: HeadersInit = {
    "Content-type": "application/json;charset=UTF-8"
  }
  constructor() { }

  async getData() {
    try {
      const response = await fetch(this.url)
      console.log(response.status)
      const respJson = await response.json()
      console.log(`response:${respJson}`)
      return respJson
    }
    catch (error) {
      console.error(error)
      return { 'error': `${error}` }
    }
  }
  async validate(scrapingInstance: ScrapingInstance) {

    try {

      const response = await fetch(this.url + 'validate', {
        method: "POST",
        body: JSON.stringify(scrapingInstance),
        headers: this.headers
      })
      return await response.json()
    }
    catch (error) {
      console.log(error)
    }
  }
}
