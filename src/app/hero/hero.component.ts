import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductCardComponent } from '../product-card/product-card.component'; // Import the Product type and Component
interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], // Must import the reusable component
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  // Data for the Flash Deals section
  slides: Slide[] = [
    {
      image: 'https://placehold.co/1200x500/003366/ffffff?text=PC+GAMING+1',
      title: "",
      subtitle: "Ordinateurs Portables, Composants PC, Écrans et Périphériques aux meilleurs prix.",
      buttonText: 'VOIR LES OFFRES',
      buttonLink: '#'
    },
    {
      image: 'https://placehold.co/1200x500/006633/ffffff?text=PC+GAMING+2',
      title: "DES PERFORMANCES EXCEPTIONNELLES",
      subtitle: "Les derniers modèles pour gamers et professionnels.",
      buttonText: 'VOIR LES OFFRES',
      buttonLink: '#'
    },
    {
      image: 'https://placehold.co/1200x500/660033/ffffff?text=PC+GAMING+3',
      title: "VOTRE PARTENAIRE HIGH-TECH",
      subtitle: "Composants, accessoires et PC portables adaptés à tous vos besoins.",
      buttonText: 'VOIR LES OFFRES',
      buttonLink: '#'
    }
  ];
   currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => this.nextSlide(), 5000); // Change slide every 5s
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
  flashDeals: Product[] = [
    {
      name: 'ASUS Vivobook 15" i5 / 8GB / 512GB SSD',
      ref: 'V15-i5-512',
      imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=PC+Portable',
      price: 1899.000,
      oldPrice: 2199.000,
      badge: 'PROMO',
      badgeColor: 'b2s-orange',
      stockStatus: 'Stock Limité'
    },
    {
      name: 'NVIDIA RTX 4070 Ti 12GB G6X (Gaming)',
      ref: '4070-TI-12G',
      imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Carte+Graphique',
      price: 4350.000,
      badge: 'NOUVEAU',
      badgeColor: 'soft-blue',
      stockStatus: 'En Stock'
    },
    {
      name: 'Moniteur Gaming 27" QHD 144Hz',
      ref: 'M27G-QHD',
      imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Ecran+PC',
      price: 1062.500,
      oldPrice: 1250.000,
      badge: 'FLASH -15%',
      badgeColor: 'b2s-orange',
      stockStatus: 'Stock Très Limité'
    },
    {
      name: 'SSD NVMe 1TB Gen4 (Haute Vitesse)',
      ref: 'SSD1T-G4',
      imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=SSD+NVMe',
      price: 389.000,
      stockStatus: 'Bientôt Disponible'
    },
  ];

  // Data for the PC Portable section
  laptopProducts: Product[] = [
    {
      name: 'HP 15" i3 / 4GB / 256GB SSD (Bureautique)',
      ref: 'HP-i3-256',
      imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Laptop+Budget',
      price: 1150.000,
      stockStatus: 'En Stock'
    },
    {
      name: 'DELL XPS 13" i7 / 16GB / 1TB SSD (Pro)',
      ref: 'XPS-i7-1T',
      imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Laptop+Pro',
      price: 4990.000,
      badge: 'TOP VENTE',
      badgeColor: 'b2s-orange',
      stockStatus: 'En Stock'
    },
    {
      name: 'LENOVO Legion Gaming i9 / RTX 4070 / 32GB',
      ref: 'LGN-i9-4070',
      imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=PC+Gamer',
      price: 6800.000,
      stockStatus: 'En Stock'
    },
    {
      name: 'HP Victus 16" Ryzen 7 / 16GB / 1TB SSD',
      ref: 'VCT-R7-1T',
      imageUrl: 'https://placehold.co/400x300/F0F0F0/003366?text=Laptop+AMD',
      price: 3190.000,
      stockStatus: 'En Stock'
    },
  ];
  // --- Dans votre component.ts (ex: HomeComponent) ---

softwarePromos = [
  {
    title: 'Logiciels Bureautique',
    imageUrl: '/assets/images/logo-windows-office.png', // Remplacez par le chemin réel
    href: '/logiciels/bureautique',
    backgroundColor: 'bg-white',
    ringColor: 'ring-blue-500' // Pour le logo Windows/Office
  },
  {
    title: 'Logiciels Conception',
    imageUrl: '/assets/images/logo-autodesk.png', // Remplacez par le chemin réel
    href: '/logiciels/conception',
    backgroundColor: 'bg-white',
    ringColor: 'ring-teal-500' // Pour le logo Autodesk
  },
  {
    title: 'Antivirus et Sécurité',
    imageUrl: '/assets/images/logo-securite.png', // Remplacez par le chemin réel
    href: '/antivirus',
    backgroundColor: 'bg-white',
    ringColor: 'ring-green-500' // Pour l'icône de bouclier
  },
  {
    title: 'Offres Spéciales',
    imageUrl: '/assets/images/sticker-promo.png', // Remplacez par le chemin réel
    href: '/promotions',
    backgroundColor: 'bg-white',
    ringColor: 'ring-red-500' // Pour le sticker rouge
  },
];

  // Data for the Service Banner
  services = [
    { title: 'Livraison Rapide', description: 'Partout en Tunisie', icon: 'fa-truck-fast' },
    { title: 'Garantie Officielle', description: 'Produits certifiés', icon: 'fa-shield-halved' },
    { title: 'Paiement Sécurisé', description: 'Plusieurs options', icon: 'fa-wallet' },
    { title: 'Support 24/7', description: 'Service client réactif', icon: 'fa-headset' },
  ];

  // Data for the Category Grid
  categories = [
    { name: 'PC Portables', icon: 'fa-laptop', href: '#' },
    { name: 'Écrans & Moniteurs', icon: 'fa-desktop', href: '#' },
    { name: 'Composants PC', icon: 'fa-microchip', href: '#' },
    { name: 'Périphériques', icon: 'fa-keyboard', href: '#' },
    { name: 'Gaming', icon: 'fa-gamepad', href: '#' },
    { name: 'Réseaux & Stockage', icon: 'fa-wifi', href: '#' },
  ];
}