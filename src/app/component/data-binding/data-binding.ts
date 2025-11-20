import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrls: ['./data-binding.css'],
})
export class DataBinding {
  name: string = 'Angular';
  topic: string = 'Data Binding';
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
  onSave(){ 
    alert('Données sauvegardées avec succès');
  }
  onChange(){
    alert('La valeur a été changée');
  }
}
