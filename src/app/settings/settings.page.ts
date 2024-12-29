import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelect, IonSelectOption]
})
export class SettingsPage implements OnInit {
  units: string[] = ['Metric', 'Standard', 'Imperial']; // Available units
  selectedUnit: string = 'Metric'; // Default unit


  constructor(private dataService: DataService) { }

  async ngOnInit() {
    // Load the selected unit from storage or use the default
    this.selectedUnit = await this.dataService.getUnit();
  }

  async saveSettings() {
    // Save the selected unit to storage
    await this.dataService.setUnit(this.selectedUnit);
  }

}
