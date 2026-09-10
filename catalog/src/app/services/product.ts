import { Injectable, signal } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = signal<Product[]>([
    { id: 1, name: 'Ноутбук', price: 32000, quantity: 4 },
    { id: 2, name: 'Мишка', price: 800, quantity: 10 },
    { id: 3, name: 'Монітор', price: 9000, quantity: 3 }
  ]);

  getProducts() {
    return this.products.asReadonly();
  }

  addProduct(name: string, price: number, quantity: number) {
    const newProduct: Product = {
      id: Date.now(),
      name,
      price,
      quantity
    };
    this.products.update(items => [...items, newProduct]);
  }

  removeProduct(id: number) {
    this.products.update(items => items.filter(product => product.id !== id));
  }
}