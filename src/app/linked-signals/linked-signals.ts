import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-linked-signals',
  imports: [CommonModule, FormsModule],
  templateUrl: './linked-signals.html',
  styleUrl: './linked-signals.css',
})
export class LinkedSignals {
  quantitySignal=signal(1);
}
