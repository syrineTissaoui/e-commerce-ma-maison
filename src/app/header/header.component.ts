import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for *ngIf / *ngFor
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobileMenuOpen: boolean = false;
  cartCount: number = 3; // Example data binding

  desktopNavItems = [
    { label: 'Accueil  ', dropdown: false, href: '/' },
    { label: 'Informatique ', dropdown: true, href: '/pc-portables'},
    { label: 'Stockages ', dropdown: true, href: '/composants-pc' },
    { label: 'Téléphones & Tablettes', dropdown: true, href: '/peripheriques' },
    { label: 'Logiciels ', dropdown: true, href: '/ecrans' },
    { label: 'Promos', dropdown: false,href: '/promos', isPromo: true },
    { label: 'Impression ', dropdown: true, href: '/ecrans' },
    { label: 'Support IT', dropdown: true,href: '/support'},


  ];

  mobileCategories = [
   { name: 'Informatique', icon: 'fa-laptop', href: '/pc-portables'},
    { name: 'Stockages', icon: 'fa-hard-drive', href: '/composants-pc' },
    { name: 'Téléphones & Tablettes', icon: 'fa-mobile-screen', href: '/peripheriques' },
    { name: 'Logiciels', icon: 'fa-cube', href: '/logiciels' },
    { name: 'Impression', icon: 'fa-print', href: '/imprimantes' },
    { name: 'Support IT', icon: 'fa-headset', href: '/support'},

  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Note: Angular doesn't directly manage body overflow, 
    // but we can add a class to the body element if needed 
    // using Renderer2 or HostBinding. Keeping it simple here.
  }
}