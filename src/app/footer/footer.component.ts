import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // Data for the Categories section in the footer
  footerCategories = [
    { label: 'PC Portables', href: '/pc-portables' },
    { label: 'Composants PC', href: '/composants-pc'  },
    { label: 'Périphériques', href: '/peripheriques' },
    { label: 'Écrans', href: '/ecrans' },
   
  ];

  // Data for the Information (Liens Utiles) section
  footerInfo = [
    { label: 'À Propos de Nous', href: '#' },
    { label: 'Contact & Adresses', href: '#' },
    { label: 'Conditions Générales de Vente', href: '#' },
    { label: 'Politique de Retour', href: '#' },
  ];

  // Contact Information
  contactInfo = [
    { text: 'rades', icon: 'fa-location-dot' },
    { text: '(+216) 50 300 111', icon: 'fa-phone-volume' },
    { text: 'contact@ma-maison-informatique.com', icon: 'fa-envelope' },
  ];
}