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
    { label: 'ACCUEIL', dropdown: false, href: '/' },
    { label: 'PC PORTABLES', dropdown: true, href: '/pc-portables'},
    { label: 'COMPOSANTS PC', dropdown: true, href: '/composants-pc' },
    { label: 'PÉRIPHÉRIQUES', dropdown: true, href: '/peripheriques' },
    { label: 'ÉCRANS', dropdown: true, href: '/ecrans' },
    { label: 'PROMOS', dropdown: false,href: '/promos', isPromo: true },
    { label: 'SUPPORT-IT', dropdown: true,href: '/support'},


  ];

  mobileCategories = [
    { name: 'PC Portables', icon: 'fa-laptop', href: '/pc-portables'},
    { name: 'Composants PC', icon: 'fa-microchip',  href: '/composants-pc' },
    { name: 'Périphériques', icon: 'fa-keyboard', href: '/peripheriques' },
    { name: 'Écrans', icon: 'fa-desktop',href: '/ecrans' },
    { name: 'SUPPORT-IT',  icon: 'fa-desktop',href: '/support'},

  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Note: Angular doesn't directly manage body overflow, 
    // but we can add a class to the body element if needed 
    // using Renderer2 or HostBinding. Keeping it simple here.
  }
}