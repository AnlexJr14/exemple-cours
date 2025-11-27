import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedData {
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
