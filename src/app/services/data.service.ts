import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init(); // Initialize the storage when the service is created
  }

  async init() {
    // Create the storage instance
    this._storage = await this.storage.create();
  }

  async getUnit(): Promise<string> {
    // Retrieve the unit from storage or return the default 'Metric'
    return (await this._storage?.get('unit')) || 'Metric';
  }

  async setUnit(unit: string): Promise<void> {
    // save the selected unit in storage
    await this._storage?.set('unit', unit);
  }

  }
