// src/app/mobile-menu/mobile-menu.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-mobile-menu',
  // Ajoutez CommonModule dans les imports pour utiliser ngClass, *ngIf, *ngFor
  imports: [CommonModule],
  templateUrl: './mobile-menu.component.html',
})
export class MobileMenuComponent {
  @Input() isOpen = false;
  @Output() closeMenu = new EventEmitter<void>();

  close() {
    this.closeMenu.emit();
  }
}