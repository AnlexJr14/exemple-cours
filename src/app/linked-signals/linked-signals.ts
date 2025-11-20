import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-linked-signals',
  imports: [CommonModule, FormsModule],
  templateUrl: './linked-signals.html',
})
export class LinkedSignals {
  quantitySignal = signal(1);
  unitPriceSignal = signal(100);
  totalSignal = signal(this.quantitySignal() * this.unitPriceSignal());

  updateQuantity(value: number | string) {
    const parsed = this.toPositiveInteger(value);
    this.quantitySignal.set(parsed);
  }

  updateUnitPrice(value: number | string) {
    const parsed = this.toPositiveNumber(value);
    this.unitPriceSignal.set(parsed);
  }

  calculateTotal() {
    this.totalSignal.set(this.quantitySignal() * this.unitPriceSignal());
  }


  euroAmountSignal = signal(114);
  dollarAmountSignal = signal(120.84);
  exchangeRateSignal = signal(1.06);

  updateEuroAmount(value: number | string) {
    const parsed = this.toPositiveNumber(value);
    this.euroAmountSignal.set(parsed);
    this.dollarAmountSignal.set(parsed * this.exchangeRateSignal());
  }

  updateDollarAmount(value: number | string) {
    const parsed = this.toPositiveNumber(value);
    this.dollarAmountSignal.set(parsed);
    if (this.exchangeRateSignal() > 0) {
      this.euroAmountSignal.set(parsed / this.exchangeRateSignal());
    }
  }

  updateExchangeRate(value: number | string) {
    const parsed = this.toPositiveNumber(value);
    this.exchangeRateSignal.set(parsed);
    this.dollarAmountSignal.set(this.euroAmountSignal() * parsed);
  }

  formatCurrency(amount: number) {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    }).format(amount);
  }

  formatDollar(amount: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  }

  private toPositiveInteger(value: number | string) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed < 0) {
      return 0;
    }
    return Math.floor(parsed);
  }

  private toPositiveNumber(value: number | string) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed < 0) {
      return 0;
    }
    return parsed;
  }
}
