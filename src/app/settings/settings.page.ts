import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonRadio, IonItem, IonList, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRadioGroup, RouterModule, ]
})
export class SettingsPage implements OnInit {
  units: string[] = ['Metric', 'Standard', 'Imperial']; // Available units
  selectedUnit: string = 'Metric'; // Default unit


  constructor(
    private dataService: DataService,
    private toastController: ToastController,
    private navController: NavController 
   ) { }

  async ngOnInit() {
    try {
    // Load the selected unit from storage or use the default
    const savedUnit = await this.dataService.getUnit();
      if (savedUnit) {
        this.selectedUnit = savedUnit;
      }
    } catch (error) {
      console.error('Error loading unit from storage:', error);
    }
  }

  async saveSettings() {
    try {
    // Save the selected unit to storage
    await this.dataService.setUnit(this.selectedUnit);

    const toast = await this.toastController.create({
      message: 'Settings saved successfully!',
      duration: 2000,
      color: 'success',
    });
    toast.present();
    // Navigate back to the home page after the toast
    toast.onDidDismiss().then(() => {
      this.navController.navigateRoot('/home'); // Navigate to the Home Page
    });
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  }

}
