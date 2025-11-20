import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive-ngif-vs-if.html',
  styleUrls: ['./structural-directive-ngif-vs-if.css'],
})
export class StructuralDirectiveNgifVsIf {
  isChecked: boolean = false;
  isInputBox: boolean = true;
  topic: string = "Angular";
  input1:string="";
  input2:string="";
  onClick() {
    this.isChecked = !this.isChecked;
  };
  onShow() {
    this.isInputBox = true;
  };
  onHide() {
    this.isInputBox = false;
  };
}