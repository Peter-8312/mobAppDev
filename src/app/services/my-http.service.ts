import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import { firstValueFrom } from 'rxjs';



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

  // Wrapper for CapacitorHttp.get
  public async get(options: HttpOptions): Promise<any> {
    return await CapacitorHttp.get(options);
  }

  // Fetch countries by name
  public async getCountriesByName(name: string): Promise<any> {
    const url = `${this.restCountriesBaseUrl}/name/${name}`;
    if (this.isNativePlatform()) {
      const options: HttpOptions = { url };
      const response = await this.get(options); // Use wrapper method
      return response.data;
    } else {
      return firstValueFrom(this.http.get(url)); // Fallback for web
    }
  }

  // Fetch news by country
  public async getCountryNews(country: string): Promise<any> {
    const url = `${this.newsDataBaseUrl}?apikey=${this.newsApiKey}&q=${country}`;
    if (this.isNativePlatform()) {
      const options: HttpOptions = { url };
      const response = await this.get(options); // Use wrapper method
      return response.data;
    } else {
      return firstValueFrom(this.http.get(url));
    }
  }

  // Fetch weather by coordinates
  public async getWeather(lat: number, lon: number, units: string): Promise<any> {
    const url = `${this.openWeatherBaseUrl}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${this.weatherApiKey}`;
    if (this.isNativePlatform()) {
      const options: HttpOptions = { url };
      const response = await this.get(options); // Use wrapper method
      return response.data;
    } else {
      return firstValueFrom(this.http.get(url));
    }
  }

  // Helper to check if running on a native platform
  private isNativePlatform(): boolean {
    return CapacitorHttp && CapacitorHttp.get !== undefined;
  }
}
