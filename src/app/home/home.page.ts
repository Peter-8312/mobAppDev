import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonButtons, IonIcon, IonItem, IonLabel, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class HomePage implements OnInit {
  searchQuery: string = ''; // Holds the user input for the country search

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('HomePage initialized');
  }

  searchCountries() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/countries'], { queryParams: { query: this.searchQuery } });
    } else {
      console.warn('Search query is empty');
    }
  }
}
