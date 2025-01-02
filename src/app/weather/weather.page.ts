import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
import { MyHttpService } from '../services/my-http.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, ]
})
export class WeatherPage implements OnInit {
  capital: string = ''; // Capital city name
  lat: number = 0; // Latitude
  lon: number = 0; // Longitude
  units: string = 'metric'; // Temperature units (default to metric)
  weather: any = null; // Holds weather data
  isLoading: boolean = true; // Indicates if data is being loaded


  constructor(private route: ActivatedRoute, private myHttp: MyHttpService) { }

  ngOnInit() {
    // Get query parameters
    this.route.queryParams.subscribe((params) => {
      this.capital = params['capital'] || 'Unknown'; // Default to "Unknown" if no capital is provided
      this.lat = +params['lat'] || 0;
      this.lon = +params['lon'] || 0;
      this.units = params['units'] || 'metric';

      if (this.lat && this.lon) {
        this.loadWeather();
      }
    });
  }

  async loadWeather() {
    this.isLoading = true;
    try {
      this.weather = await this.myHttp.getWeather(this.lat, this.lon, this.units); // Await the Promise from MyHttpService
    } catch (error) {
      console.error('Error fetching weather:', error);
      this.weather = null; // Clear weather data in case of error
    } finally {
      this.isLoading = false; // Stop loading spinner
    }
  
  }

}
