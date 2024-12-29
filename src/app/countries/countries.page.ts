import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { MyHttpService } from '../services/my-http.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
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

loadCountries() {
  // Use MyHttpService to fetch countries by name
  this.myHttp.getCountriesByName(this.query).subscribe(
    (data: any) => {
      this.countries = data; // Assign data to countries array
    },
    (error) => {
      console.error('Error fetching countries:', error);
    }
  );
}


openNews(country: any) {
  // Navigate to the News Page with the country name as a query parameter
  this.router.navigate(['/news'], { queryParams: { country: country.name.official } });
}

openWeather(country: any) {
  // Navigate to the Weather Page with the capital, latitude, and longitude
  this.router.navigate(['/weather'], {
    queryParams: {
      capital: country.capital[0],
      lat: country.latlng[0],
      lon: country.latlng[1],
    },
  });
}

}
