import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductCardComponent } from '../product-card/product-card.component'; // Assurez-vous d'ajuster le chemin si nécessaire
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-laptop-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent,FormsModule],
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent implements OnInit {
  // Simuler la liste des produits de la catégorie PC Portable
  laptopProducts: Product[] = [];
  
  // Critères de filtrage et de tri (pour simulation)
  sortBy: string = 'price_desc';
  brandFilter: string = 'all';

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    // Dans un vrai projet, ceci appellerait un Service pour récupérer les données via une API.
    this.laptopProducts = [
      {
        name: 'DELL Latitude 14" i7 / 16GB / 512GB SSD (Pro)',
        ref: 'DL-L7420-I7',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=DELL+Latitude',
        price: 3890.000,
        badge: 'BUSINESS',
        badgeColor: 'soft-blue',
        stockStatus: 'En Stock'
      },
      {
        name: 'ASUS ROG Strix 17" i9 / RTX 4080 / 32GB',
        ref: 'ROG-STRIX-I9',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=ASUS+ROG+Gamer',
        price: 8999.000,
        badge: 'ULTRA GAMING',
        badgeColor: 'soft-red',
        stockStatus: 'Stock Limité'
      },
      {
        name: 'HP EliteBook 13" i5 / 8GB / 256GB SSD (Reconditionné)',
        ref: 'HP-EB-RECOND',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=HP+Reconditionne',
        price: 1550.000,
        oldPrice: 1900.000,
        badge: 'PROMO',
        badgeColor: 'soft-red',
        stockStatus: 'Stock Très Limité'
      },
      {
        name: 'LENOVO IdeaPad 15" R5 / 8GB / 512GB SSD',
        ref: 'LNV-IP-R5',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=LENOVO+R5',
        price: 2150.000,
        stockStatus: 'En Stock'
      },
      // Ajoutez d'autres produits ici...
    ];

    // Appliquer le tri par défaut (le plus cher en premier)
    this.applySorting();
  }

  applySorting() {
    if (this.sortBy === 'price_desc') {
      this.laptopProducts.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'price_asc') {
      this.laptopProducts.sort((a, b) => a.price - b.price);
    }
    // D'autres logiques de tri pourraient aller ici (e.g., par nom, nouveauté, etc.)
  }
  
  // Gère les changements dans les filtres ou le tri (simulation d'événement)
  onFilterChange(event: Event, type: 'sort' | 'brand') {
    const value = (event.target as HTMLSelectElement).value;
    
    if (type === 'sort') {
      this.sortBy = value;
      this.applySorting();
    } else if (type === 'brand') {
      this.brandFilter = value;
      // Ajoutez ici la logique de filtrage des produits
    }
  }
}