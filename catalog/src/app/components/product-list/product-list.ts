import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  newName: string = '';
  newPrice: number | null = null;
  newQuantity: number | null = null;

  constructor(private productService: ProductService) {}

  get products() {
    return this.productService.getProducts();
  }

  onAddProduct() {
    if (this.newName.trim() && this.newPrice !== null && this.newQuantity !== null) {
      this.productService.addProduct(this.newName, this.newPrice, this.newQuantity);
      
      this.newName = '';
      this.newPrice = null;
      this.newQuantity = null;
    }
  }

  onRemoveProduct(id: number) {
    this.productService.removeProduct(id);
  }
}