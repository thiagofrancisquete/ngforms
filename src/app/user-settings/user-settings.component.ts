import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings.interface';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'sua tia é minha',
  };

  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes()
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors';
    }

    console.log('form valid: ', form.valid);
    this.dataService.postUserSettings(this.userSettings).subscribe(
      (result) => console.log('success: ', result),
      (error) => console.log('error: ', error)
    );
  }
}
