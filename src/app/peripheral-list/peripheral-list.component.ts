import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product, ProductCardComponent } from '../product-card/product-card.component'; // Ajustez le chemin

@Component({
  selector: 'app-peripheral-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, FormsModule],
  templateUrl: './peripheral-list.component.html',
  styleUrl: './peripheral-list.component.css'
})
export class PeripheralListComponent implements OnInit {
  // Simuler la liste des produits Périphériques
  peripheralProducts: Product[] = [];
  
  // Critères de filtrage et de tri
  sortBy: string = 'price_desc';
  typeFilter: string = 'all';

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    // Données simulées pour les Périphériques
    this.peripheralProducts = [
      {
        name: 'Souris Gaming LOGITECH G502 HERO Filaire',
        ref: 'LG-G502',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Souris+G502',
        price: 180.000,
        badge: 'TOP VENTE',
        badgeColor: 'b2s-orange',
        stockStatus: 'En Stock'
      },
      {
        name: 'Clavier Mécanique RAZER BlackWidow V4 Pro',
        ref: 'RZ-BWV4P',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Clavier+Razer',
        price: 450.000,
        badge: 'NOUVEAU',
        badgeColor: 'soft-blue',
        stockStatus: 'Stock Limité'
      },
      {
        name: 'Casque Gaming HYPERX Cloud II Wireless',
        ref: 'HX-C2W',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Casque+Cloud+II',
        price: 320.000,
        oldPrice: 400.000,
        badge: 'FLASH -15%',
        badgeColor: 'b2s-orange',
        stockStatus: 'En Stock'
      },
      {
        name: 'Tapis de souris XXL STEELSERIES QcK Heavy',
        ref: 'SS-QCKXXL',
        imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Tapis+Souris',
        price: 85.000,
        stockStatus: 'Stock Limité'
      },
      // Ajoutez d'autres produits ici...
    ];

    this.applySorting();
  }

  applySorting() {
    if (this.sortBy === 'price_desc') {
      this.peripheralProducts.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'price_asc') {
      this.peripheralProducts.sort((a, b) => a.price - a.price);
    }
  }
  
  onFilterChange(event: Event, type: 'sort' | 'type') {
    const value = (event.target as HTMLSelectElement).value;
    
    if (type === 'sort') {
      this.sortBy = value;
      this.applySorting();
    } else if (type === 'type') {
      this.typeFilter = value;
      // Logique de filtrage par type
    }
  }
}