import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings.interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettings(userSettings: UserSettings): Observable<any> {
    return this.http.post(
      'https://putsreq.com/FPkNUbF5Ozlit1ymu5Cy',
      userSettings
    );

    // return of(userSettings)
  }
}
