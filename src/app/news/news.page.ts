import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner, IonList, IonItem, IonLabel, IonThumbnail, IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonCard } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MyHttpService } from '../services/my-http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButton, IonList, IonSpinner, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, ]
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

 async loadNews() {
  try {
    this.isLoading = true;
    const data = await this.myHttp.getCountryNews(this.country); // Use the Promise-based method
    this.news = data.results || []; // Assign fetched news data
  } catch (error) {
    console.error('Error fetching news:', error);
    this.news = []; // Clear the list on error
  } finally {
    this.isLoading = false; // Ensure loading indicator is hidden
  }

}

}
