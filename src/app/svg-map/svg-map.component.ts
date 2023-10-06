import { Component } from '@angular/core';
import { CountryApiService } from '../country-api.service';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.css'],
})
export class SvgMapComponent {
  selectedCountry: any = null;

  constructor(private countryApiService: CountryApiService) {}

  onCountryClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    const countryId = clickedElement.getAttribute('id');
    const countryClass = clickedElement.getAttribute('class');

    if (countryId) {
      this.fetchCountryData(countryId);
    } else if (countryClass) {
      this.fetchCountryData(countryClass);
    }
  }

  fetchCountryData(identifier: string): void {
    this.countryApiService.getCountryData(identifier).subscribe(
      (response) => {
        const countryData = response[1][0];
        console.log('Country Data:', countryData);

        this.selectedCountry = countryData;
        console.log('Selected Country:', this.selectedCountry);
      },
      (error) => {
        console.error('Error fetching country data:', error);
      }
    );
  }
}
