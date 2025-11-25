import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Ajustez le chemin vers votre ProductCardComponent
import { Product, ProductCardComponent } from '../product-card/product-card.component'; 

@Component({
  selector: 'app-screen-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, FormsModule],
  templateUrl: './screen-list.component.html',
  styleUrl: './screen-list.component.css'
})
export class ScreenListComponent implements OnInit {
  // Simuler la liste des produits Écrans
  screenProducts: Product[] = [];
  
  // Critères de filtrage et de tri
  sortBy: string = 'price_desc';
  sizeFilter: string = 'all';

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    // Données simulées pour les Écrans
    this.screenProducts = [
      {
        name: 'Écran SAMSUNG Odyssey G7 27" QHD 240Hz',
        ref: 'SM-G7-27',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Ecran+Odyssey',
        price: 1850.000,
        badge: 'TOP VENTE',
        badgeColor: 'soft-red',
        stockStatus: 'En Stock'
      },
      {
        name: 'Moniteur ASUS ProArt 32" 4K HDR',
        ref: 'AS-PA32U',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Ecran+ProArt',
        price: 4200.000,
        badge: 'BUSINESS', // Assurez-vous d'avoir ce type dans votre Product interface
        badgeColor: 'soft-blue',
        stockStatus: 'Stock Limité'
      },
      {
        name: 'Écran DELL 24" FHD 75Hz (Budget)',
        ref: 'DL-E2422H',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Ecran+DELL+24',
        price: 490.000,
        oldPrice: 550.000,
        badge: 'PROMO',
        badgeColor: 'soft-red',
        stockStatus: 'En Stock'
      },
      // Ajoutez d'autres produits ici...
    ];

    this.applySorting();
  }

  applySorting() {
    if (this.sortBy === 'price_desc') {
      this.screenProducts.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'price_asc') {
      this.screenProducts.sort((a, b) => a.price - a.price);
    }
  }
  
  onFilterChange(event: Event, type: 'sort' | 'size') {
    const value = (event.target as HTMLSelectElement).value;
    
    if (type === 'sort') {
      this.sortBy = value;
      this.applySorting();
    } else if (type === 'size') {
      this.sizeFilter = value;
      // Logique de filtrage par taille d'écran
    }
  }
}