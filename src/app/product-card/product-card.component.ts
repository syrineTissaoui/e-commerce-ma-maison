import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


export interface Product {
  name: string;
  ref: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
  badge?: 'PROMO' | 'NOUVEAU' | 'TOP VENTE' | 'FLASH -15%' | 'BUSINESS' | 'ULTRA GAMING';
 
  badgeColor?: 'b2s-orange' | 'soft-blue'; // Tailwind classes defined in config
  stockStatus: 'En Stock' | 'Stock Limité' | 'Stock Très Limité' | 'Bientôt Disponible';
  category?: 'PC Portable' | 'Composant PC' | 'Périphérique' | 'Écran'; // ou string si vous voulez plus de flexibilité
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  // Input property to receive product data from the parent component
  @Input({ required: true }) product!: Product;

  // Functionality (optional, you'd usually use a Service)
  addToCart(productName: string) {
    console.log(`Adding ${productName} to cart!`);
    // Logic to call a Cart Service here
  }

  getStockIcon(status: string) {
    switch (status) {
      case 'En Stock':
        return 'fa-check';
      case 'Stock Limité':
        return 'fa-box';
      case 'Stock Très Limité':
        return 'fa-box-open';
      case 'Bientôt Disponible':
        return 'fa-bell-slash';
      default:
        return 'fa-info-circle';
    }
  }

  getStockColor(status: string) {
    switch (status) {
      case 'En Stock':
      case 'Stock Très Limité':
      case 'Stock Limité':
        return 'text-green-600';
      case 'Bientôt Disponible':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  }
}