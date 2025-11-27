import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product, ProductCardComponent } from '../product-card/product-card.component'; 

@Component({
  selector: 'app-promo-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, FormsModule],
  templateUrl: './promo-list.component.html',
  styleUrl: './promo-list.component.css'
})
export class PromoListComponent implements OnInit {
  // Liste des produits en promotion
  promoProducts: Product[] = [];
  
  // Critères de filtrage et de tri
  sortBy: string = 'discount_desc'; // Tri par défaut : meilleure réduction
  categoryFilter: string = 'all';

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    // --- SIMULATION DE LA BASE DE DONNÉES GLOBALE ---
    // Dans une vraie application, un service API interrogerait les produits ayant un prix barré ou un badge promo.
    // Ici, nous simulons une liste globale (mélange de PC, composants, périphériques...)
    const allProducts = [
      // PC Portable
      {
        name: 'HP EliteBook 13" i5 / 8GB / 256GB SSD (Reconditionné)',
        ref: 'HP-EB-RECOND',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=HP+Reconditionne',
        price: 1550.000,
        oldPrice: 1900.000,
        badge: 'PROMO', // C'est un type literal, mais TypeScript est strict
        badgeColor: 'b2s-orange', // C'est un type literal
        stockStatus: 'Stock Très Limité',
        category: 'PC Portable'
      },
      // Composant PC
      {
        name: 'RAM DDR5 G.Skill Trident Z5 32GB (2x16GB) 6000MHz',
        ref: 'DDR5-TZ5-32',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=RAM+DDR5',
        price: 580.000,
        oldPrice: 700.000,
        badge: 'PROMO',
        badgeColor: 'b2s-orange',
        stockStatus: 'En Stock',
        category: 'Composant PC'
      },
      // Périphérique
      {
        name: 'Casque Gaming HYPERX Cloud II Wireless',
        ref: 'HX-C2W',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Casque+Cloud+II',
        price: 320.000,
        oldPrice: 400.000,
        badge: 'FLASH -15%',
        badgeColor: 'b2s-orange',
        stockStatus: 'En Stock',
        category: 'Périphérique'
      },
      // Écran
      {
        name: 'Écran DELL 24" FHD 75Hz (Budget)',
        ref: 'DL-E2422H',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Ecran+DELL+24',
        price: 490.000,
        oldPrice: 550.000,
        badge: 'PROMO',
        badgeColor: 'b2s-orange',
        stockStatus: 'En Stock',
        category: 'Écran'
      },
      // Produit non en promo (doit avoir les propriétés optionnelles manquantes)
      {
        name: 'Souris Gaming non-promo',
        ref: 'NOM-PRM',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Produit+Normal',
        price: 100.000,
        // oldPrice: undefined, // Mieux de ne pas les inclure si elles sont optionnelles
        // badge: undefined,
        // badgeColor: undefined,
        stockStatus: 'En Stock',
        category: 'Périphérique'
      },
       ] as Product[];
    // Logique : Filtrer uniquement les produits qui ont une propriété 'oldPrice'
   this.promoProducts = allProducts.filter(p => p.oldPrice);

    this.applySorting();
  }

  applySorting() {
    if (this.sortBy === 'price_desc') {
      this.promoProducts.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'price_asc') {
      this.promoProducts.sort((a, b) => a.price - a.price);
    } else if (this.sortBy === 'discount_desc') {
        // Triez par le pourcentage de réduction pour montrer la meilleure affaire en premier
        this.promoProducts.sort((a, b) => {
            const discountA = a.oldPrice ? (a.oldPrice - a.price) / a.oldPrice : 0;
            const discountB = b.oldPrice ? (b.oldPrice - b.price) / b.oldPrice : 0;
            return discountB - discountA;
        });
    }
  }
  
  onFilterChange(event: Event, type: 'sort' | 'category') {
    // Logique de tri ou de filtrage si nécessaire (pour filtrer par catégorie au sein des promos)
    if (type === 'sort') {
      this.sortBy = (event.target as HTMLSelectElement).value;
      this.applySorting();
    } 
    // Le filtrage par catégorie n'est pas implémenté dans la simulation actuelle, mais l'événement est prêt.
  }
}