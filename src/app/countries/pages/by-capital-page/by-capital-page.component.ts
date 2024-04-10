import { Component, EventEmitter, Output, output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../intefaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: `
  :host {
    display: block;
  }
`,
})
export class ByCapitalPageComponent {

  public countries : Country[] = []

  constructor(private countriesService: CountriesService){}

  searchByCapital(term: string):void {
    this.countriesService.searchCapital(term)
    .subscribe(countries =>{
      this.countries= countries
    })
  }

}

