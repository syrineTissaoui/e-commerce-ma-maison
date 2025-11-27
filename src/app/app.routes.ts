import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component'; 
import { LaptopListComponent } from './laptop-list/laptop-list.component'; 
import { ComponentListComponent } from './component-list/component-list.component';
import { PeripheralListComponent } from './peripheral-list/peripheral-list.component';
import { ScreenListComponent } from './screen-list/screen-list.component';
import { PromoListComponent } from './promo-list/promo-list.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { QuoteRequestComponent} from './quote-request/quote-request.component'
export const routes: Routes = [
  // Route de la page d'accueil (votre page principale)
  { path: '', component: HeroComponent, title: 'Ma-Maison-informatique Tunisie | Matériel Informatique' },
  
  // Nouvelle Route pour la liste des PC Portables
  { 
    path: 'pc-portables', 
    component: LaptopListComponent, 
    title: 'PC Portables | Ma-Maison-informatique Tunisie' 
  },
  { 
    path: 'composants-pc', 
    component: ComponentListComponent, 
    title: 'Composants PC | Ma-Maison-informatique Tunisie' 
  },
  { 
    path: 'peripheriques', 
    component: PeripheralListComponent, 
    title: 'Périphériques PC | Ma-Maison-informatique Tunisie' 
  },
  { 
    path: 'ecrans', 
    component: ScreenListComponent, 
    title: 'Écrans & Moniteurs | Ma-Maison-informatique Tunisie' 
  },
  { 
    path: 'promos', // Le chemin pour l'URL
    component: PromoListComponent, 
    title: 'Promotions & Offres Spéciales | Ma-Maison-informatique Tunisie' 
  },
  { 
    path: 'support', // Le chemin pour l'URL
    component: SupportPageComponent, 
    title: 'Support IT |Ma-Maison-informatique Tunisie' 
  },
   { 
    path: 'Demande-devis', // Le chemin pour l'URL
    component:QuoteRequestComponent  , 
    title: 'Demande Devis |Ma-Maison-informatique Tunisie' 
  },
  
  // Redirection pour les chemins inconnus (404)
  { path: '**', redirectTo: '' } 
];