import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private http: HttpClient) { }

  getCountriesByName(name: string) {
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`);
  }

  getCountryNews(country: string) {
    return this.http.get(`https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&q=${country}`);
  }

  getWeather(lat: number, lon: number, units: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=YOUR_API_KEY`);
  }
}
