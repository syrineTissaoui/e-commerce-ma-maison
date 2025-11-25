import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-support-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './support-page.component.html',
  styleUrl: './support-page.component.css'
})
export class SupportPageComponent {
  // Informations de contact simulées
  contactInfo = {
    phone: '+216 56 343 111',
    email: 'contact@softechtunisie.tn',
    hours: 'Lun - Ven: 9h00 - 18h00'
  };
}