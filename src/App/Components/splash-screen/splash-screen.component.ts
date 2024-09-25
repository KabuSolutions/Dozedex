import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css'
})
export class SplashScreenComponent {
  showSplash: boolean = true;
  showPulsant: boolean = true;

  ngOnInit(): void {

    setTimeout(() => {
      this.showSplash = !this.showSplash;
    }, 3000);
  }
}
