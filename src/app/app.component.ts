// src/app/app.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { HeroComponent } from './hero/hero.component';


import { FormsModule } from '@angular/forms';
// N'oubliez pas le CommonModule si vous utilisez des directives comme *ngIf ou *ngFor
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    FormsModule,
    FooterComponent,
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Ma-Maison-Informatique';
  isMobileMenuOpen = false;
  isSidebarOpen: boolean = false; 

  // Compte à rebours
  countdownDate: Date = new Date(new Date().getTime() + 86400000); // Demain à cette heure
  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  private countdownInterval: any;

  ngOnInit(): void {
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  // Méthode pour basculer (ouvrir/fermer)
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.countdownDate.getTime() - now;

    if (distance < 0) {
      clearInterval(this.countdownInterval);
      this.days = this.hours = this.minutes = this.seconds = '00';
      return;
    }

    this.days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    this.hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    this.minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    this.seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
  }
}