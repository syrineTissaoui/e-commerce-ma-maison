import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Pour *ngIf et ngClass
import { RouterLink, RouterLinkActive } from '@angular/router'; // Pour la navigation

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], // Importations nécessaires
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
  // Définit l'état actuel de la barre latérale (ouvert/fermé), contrôlé par le parent (AppComponent)
  @Input() isOpen: boolean = false;
  
  // Émet un événement lorsque la barre latérale doit être fermée (ex: clic sur le bouton X ou l'overlay)
  @Output() closeSidebar = new EventEmitter<void>();

  // Liste des catégories pour la navigation
  categories = [
    { name: 'PÉRIPHÉRIQUES & ÉCRANS', link: '/peripherals', icon: 'fa-desktop' },
    { name: 'ORDINATEURS PORTABLES', link: '/laptops', icon: 'fa-laptop' },
    { name: 'COMPOSANTS PC', link: '/components', icon: 'fa-microchip' },
    { name: 'STOCKAGE & RÉSEAUX', link: '/storage', icon: 'fa-network-wired' },
    { name: 'LOGICIELS', link: '/software', icon: 'fa-file-code' },
    { name: 'GAMING', link: '/gaming', icon: 'fa-gamepad' },
  ];

  onClose() {
    this.closeSidebar.emit();
  }
}