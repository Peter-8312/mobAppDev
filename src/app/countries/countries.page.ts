import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonList, IonThumbnail, IonCardContent, IonCardTitle, IonCardHeader, IonCard } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { MyHttpService } from '../services/my-http.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class CountriesPage implements OnInit {
  countries: any[] = []; //stores list of countries
  query: string = '';  //query parameter

  constructor(
    private myHttp: MyHttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
     // Load query parameters and fetch countries
     this.route.queryParams.subscribe((params) => {
      this.query = params['query'] || '';
      if (this.query) {
        this.loadCountries();
      }
  });
}

async loadCountries() {
  try {
    const data = await this.myHttp.getCountriesByName(this.query);
    this.countries = data || []; // Assign data to countries array
  } catch (error) {
    console.error('Error fetching countries:', error);
    this.countries = []; // Clear the list if there are errors
  }
}


openNews(country: any) {
  // Navigate to the News Page with the country name as a query parameter
  this.router.navigate(['/news'], { queryParams: { country: country.name.official } });
}

openWeather(country: any) {
  // Navigate to the Weather Page with the capital, latitude, and longitude
  this.router.navigate(['/weather'], {
    queryParams: {
      capital: country.capital ? country.capital[0] : "Unknown",
      lat: country.latlng ? country.latlng[0] : 0,
      lon: country.latlng ? country.latlng[1] : 0,
    },
  });
}

}
