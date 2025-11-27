import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedData } from '../shared-data';

@Component({
  selector: 'app-profil',
  imports: [CommonModule, FormsModule],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil implements OnInit {
  // userData: {
  //   id: number;
  //   nom: string;
  //   username: string;
  //   email: string;
  //   inscription: string;
  // } = {
  //     id: 1,
  //     nom: 'Axel',
  //     username: 'Axel',
  //     email: 'axel@gmail.com',
  //     inscription: 'basic'
  //   }

  dumyData: any;
  isEligible: boolean;
  apiData:any;
  constructor(private sharedData: SharedData) {
    this.dumyData = this.sharedData.userData;
    this.isEligible = this.sharedData.checkEligibility();
  }
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.sharedData.getUserData().subscribe(res=>{
      this.apiData=res;
    })
  }

  // isEligible: boolean=this.checkEligibility();
  // checkEligibility():boolean{
  //   if(this.userData.inscription==='basic' || this.userData.email.endsWith('@gmail.com')){
  //     return true;
  //   }
  //   return false;
  // }
  //constructor(private sharedData:SharedData){
  //  this.isEligible=this.sharedData.checkEligibility(this.userData.inscription);
  //}
}
