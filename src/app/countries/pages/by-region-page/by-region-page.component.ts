import { Component, OnInit } from '@angular/core';
import { Country } from '../../intefaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../intefaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = []
  public regions: Region[]= ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region

  constructor(private countriesService: CountriesService){}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region
  }

  searchByRegion(term: Region):void {
    this.selectedRegion=term
    this.countriesService.searchRegion(term)
    .subscribe(countries =>{
      this.countries= countries
    })
  }

}
