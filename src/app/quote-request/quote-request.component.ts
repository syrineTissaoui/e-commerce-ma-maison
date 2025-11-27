// Exemple dans votre fichier quote-request.component.ts

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-quote-request',
 standalone: true,
  imports: [
    FormsModule 
  ],
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.css']
})
export class QuoteRequestComponent {


  quoteData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    requestType: '',
    description: '',
    budget: null
  };

  constructor() { }

  submitQuoteRequest() {
    if (this.isFormValid()) {
      // 1. Envoyer les données (quoteData) à votre API ou service
      console.log('Demande de devis soumise :', this.quoteData);

      // 2. Afficher un message de succès à l'utilisateur
      alert('Votre demande de devis a été envoyée avec succès ! Nous vous répondrons rapidement.');
      
      // 3. Réinitialiser le formulaire (optionnel)
      this.resetForm();
    }
  }

  isFormValid(): boolean {
    // Vérification simple si les champs requis sont remplis
    return this.quoteData.name !== '' && 
           this.quoteData.email !== '' && 
           this.quoteData.phone !== '' && 
           this.quoteData.requestType !== '' && 
           this.quoteData.description !== '';
  }

  resetForm() {
     this.quoteData = {
      name: '',
      email: '',
      phone: '',
      company: '',
      requestType: '',
      description: '',
      budget: null
    };
  }
}