import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScrapingService } from '../scraping-service.service';

@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.css']
})
export class ScrapingComponent {
  scrapingForm = new FormGroup({
    url : new FormControl('',Validators.required),
    integrationType: new FormControl('',Validators.required),
    proxySetting: new FormControl('', Validators.required)
  })

  scrapingService = new ScrapingService();
  
  callUrl(){
    console.log(`value: ${this.scrapingForm.value}`)
    this.scrapingService.getData().then(
      (message)=> console.log(`data::: ${JSON.stringify(message)}`)
    )
  }
}
