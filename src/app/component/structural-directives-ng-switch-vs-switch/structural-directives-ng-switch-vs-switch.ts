import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives-ng-switch-vs-switch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives-ng-switch-vs-switch.html',
  styleUrls: ['./structural-directives-ng-switch-vs-switch.css'],
})
export class StructuralDirectivesNgSwitchVsSwitch {
  note: number = 0;

  getGradeCategory(): string {
    if (this.note >= 90) return 'excellent';
    if (this.note >= 80) return 'very good';
    if (this.note >= 70) return 'good';
    if (this.note >= 50) return 'Passable';
    return 'Recalé';
  }

  selectedGrade: string | null = null;

  showMessage(grade: string) {
    this.selectedGrade = grade;
  }

  getMessageColor(): string {
    switch (this.selectedGrade) {
      case '1st': return 'text-primary';
      case '2nd': return 'text-success';
      case '3rd': return 'text-warning';
      default: return '';
    }
  }

  getMessageText(): string {
    switch (this.selectedGrade) {
      case '1st': return 'Bienvenue au 1st grade !';
      case '2nd': return 'Bravo pour atteindre le 2nd grade !';
      case '3rd': return 'Excellent ! Vous êtes au 3rd grade !';
      default: return '';
    }
  }
}
