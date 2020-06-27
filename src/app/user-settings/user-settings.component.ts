import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings.interface';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: 'Simone',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'sua tia é minha',
  };

  userSettings: UserSettings = { ...this.originalUserSettings}

  constructor() {}

  ngOnInit(): void {}

  send(){
    console.log(this.userSettings)
  }
}
