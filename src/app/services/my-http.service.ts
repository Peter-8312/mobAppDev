import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  private restCountriesBaseUrl = 'https://restcountries.com/v3.1';
  private newsDataBaseUrl = 'https://newsdata.io/api/1/news';
  private openWeatherBaseUrl = 'https://api.openweathermap.org/data/2.5';

  private newsApiKey = 'pub_63953ae3a6954d4d03c40640175b1eddf9615';
  private weatherApiKey = '06b89094f508f87d1a5f73eff42733bc';

  constructor(private http: HttpClient) { }

  getCountriesByName(name: string): Observable<any> {
    const url = `${this.restCountriesBaseUrl}/name/${name}`;
    console.log('Fetching countries from:', url); // Debug log
    return this.http.get(url);
  }

  getCountryNews(country: string): Observable<any> {
    const url = `${this.newsDataBaseUrl}?apikey=${this.newsApiKey}&q=${country}`;
    console.log('Fetching news from:', url); // Debug log
    return this.http.get(url);
  }

  getWeather(lat: number, lon: number, units: string): Observable<any> {
    const url = `${this.openWeatherBaseUrl}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${this.weatherApiKey}`;
    console.log('Fetching weather from:', url); // Debug log
    return this.http.get(url);
  }
}
