import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { enviroment } from '../../../Enviroments/enviroment';

@Component({
  selector: 'splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css'
})
export class SplashScreenComponent {
  showSplash: boolean = true;
  showPulsant: boolean = true;
  splashIcon: string = enviroment.SplashIcon;
  extension: string = this.splashIcon.substring(this.splashIcon.length - 3);

  ngOnInit(): void {
    if(this.extension != "gif") {
      this.showPulsant = true;
    }
    else {
      this.showPulsant = false;
    }

    setTimeout(() => {
      this.showSplash = !this.showSplash;
    }, 3000);
  }
}
