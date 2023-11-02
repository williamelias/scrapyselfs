import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScrapingService } from '../scraping-service.service';
import { ScrapingInstance } from '../scraping-instance';

@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.css']
})
export class ScrapingComponent {
  scrapingForm = new FormGroup({
    url : new FormControl('',[Validators.required,Validators.nullValidator]),
    integrationType: new FormControl('',[Validators.required,Validators.nullValidator]),
    withProxy: new FormControl('', [Validators.required,Validators.nullValidator])
  })

  scrapingService = new ScrapingService();
  
  callUrl(){
    console.log(`value: ${this.scrapingForm.value}`)
    this.scrapingService.getData().then(
      (message)=> console.log(`data::: ${JSON.stringify(message)}`)
    )
  }

  validateData(){
    console.log(`value: ${this.scrapingForm.value}`)


    let scrapingInstance: ScrapingInstance = {
      url:this.scrapingForm.value.url!,
      integrationType:this.scrapingForm.value.integrationType!,
      withProxy: this.scrapingForm.value.withProxy! == 'yes'?true:false
    }


    this.scrapingService.validate(
      scrapingInstance
    ).then(
      (data)=> console.log(`data:${JSON.stringify(data)}`)
    )
  }
}
