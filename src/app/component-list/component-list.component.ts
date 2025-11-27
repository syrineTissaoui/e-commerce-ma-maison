import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Assurez-vous d'ajuster le chemin vers votre ProductCardComponent
import { Product, ProductCardComponent } from '../product-card/product-card.component'; 

@Component({
  selector: 'app-component-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, FormsModule],
  templateUrl: './component-list.component.html',
  styleUrl: './component-list.component.css'
})
export class ComponentListComponent implements OnInit {
  // Simuler la liste des produits de la catégorie Composants PC
  componentProducts: Product[] = [];
  
  // Critères de filtrage et de tri
  sortBy: string = 'price_desc';
  manufacturerFilter: string = 'all';

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    // Données simulées pour les composants PC
    this.componentProducts = [
      {
        name: 'Carte Graphique NVIDIA RTX 4070 Ti SUPER 16GB',
        ref: 'RTX-4070TiS',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=RTX+4070',
        price: 3200.000,
        badge: 'TOP VENTE',
        badgeColor: 'b2s-orange',
        stockStatus: 'En Stock'
      },
      {
        name: 'Processeur Intel Core i9-14900K',
        ref: 'i9-14900K',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Core+i9',
        price: 2150.000,
        badge: 'NOUVEAU',
        badgeColor: 'soft-blue',
        stockStatus: 'Stock Limité'
      },
      {
        name: 'RAM DDR5 G.Skill Trident Z5 32GB (2x16GB) 6000MHz',
        ref: 'DDR5-TZ5-32',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=RAM+DDR5',
        price: 580.000,
        oldPrice: 700.000,
        badge: 'PROMO',
        badgeColor: 'b2s-orange',
        stockStatus: 'En Stock'
      },
      {
        name: 'SSD M.2 Samsung 990 Pro 1TB NVMe',
        ref: 'SSD-990P-1TB',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=SSD+NVMe',
        price: 450.000,
        stockStatus: 'En Stock'
      },
      // Ajoutez d'autres produits ici...
    ];

    this.applySorting();
  }

  applySorting() {
    if (this.sortBy === 'price_desc') {
      this.componentProducts.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'price_asc') {
      this.componentProducts.sort((a, b) => a.price - a.price);
    }
    // Logique de tri
  }
  
  onFilterChange(event: Event, type: 'sort' | 'manufacturer') {
    const value = (event.target as HTMLSelectElement).value;
    
    if (type === 'sort') {
      this.sortBy = value;
      this.applySorting();
    } else if (type === 'manufacturer') {
      this.manufacturerFilter = value;
      // Logique de filtrage par fabricant
    }
  }
}