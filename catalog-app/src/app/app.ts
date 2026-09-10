import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Product {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products: Product[] = [
    { name: 'Ноутбук', price: 32000, quantity: 5 },
    { name: 'Мишка', price: 900, quantity: 0 },
    { name: 'Клавіатура', price: 1800, quantity: 7 }
  ];

  newName: string = '';
  newPrice: number | null = null;
  newQuantity: number | null = null;

  addProduct(): void {
    if (!this.newName.trim() || this.newPrice === null || this.newQuantity === null) {
      return;
    }

    this.products.push({
      name: this.newName.trim(),
      price: Number(this.newPrice),
      quantity: Number(this.newQuantity)
    });

    this.clearForm();
  }

  clearForm(): void {
    this.newName = '';
    this.newPrice = null;
    this.newQuantity = null;
  }

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }

  getProductClass(quantity: number): string {
    return quantity > 0 ? 'in-stock' : 'out-of-stock';
  }
}