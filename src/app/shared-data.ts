import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedData {
  API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get(this.API_URL);
  }


  userData: {
    id: number;
    nom: string;
    username: string;
    email: string;
    inscription: string;
  } = {
      id: 1,
      nom: 'Axel',
      username: 'Axel',
      email: 'axel@gmail.com',
      inscription: 'basic'
    }

  checkEligibility(): boolean {
    if (this.userData.inscription === 'basic' || this.userData.email.endsWith('@gmail.com')) {
      return true;
    }
    return false;
  }
}
