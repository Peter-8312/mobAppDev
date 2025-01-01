import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner, IonList, IonItem, IonLabel, IonThumbnail } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { MyHttpService } from '../services/my-http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonSpinner, IonContent, IonHeader, IonTitle, IonToolbar, IonThumbnail, CommonModule, FormsModule]
})
export class NewsPage implements OnInit {
  country: string = ''; // Country name passed as a query parameter
  news: any[] = []; // Holds the list of news articles
  isLoading: boolean = true; // Indicates if data is being loaded

  constructor(private route: ActivatedRoute, private myHttp: MyHttpService) { }

  ngOnInit() {
    // Get the country name from query parameters
    this.route.queryParams.subscribe((params) => {
      this.country = params['country'] || '';
      if (this.country) {
        this.loadNews();
      }
    });
  }

  loadNews() {
    this.isLoading = true;
    this.myHttp.getCountryNews(this.country).subscribe(
      (data: any) => {
        this.news = data.results || []; // Assign fetched news data
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching news:', error);
        this.news = [];
        this.isLoading = false;
      }
    );
  }

}
