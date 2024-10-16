import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { enviroment } from '../../../Enviroments/enviroment';
import { SplashScreenService } from '../../Services/SplashScreen.service';

@Component({
  selector: 'splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css'
})
export class SplashScreenComponent {
  public showSplash: boolean = true;
  public showPulsant: boolean = true;
  public splashIcon: string = enviroment.SplashIcon;
  public extension: string = this.splashIcon.substring(this.splashIcon.length - 3);

  constructor(public splashScreenService: SplashScreenService) { 
  }

  ngOnInit(): void {
    if (this.extension != "gif") {
      this.showPulsant = true;
    }
    else {
      this.showPulsant = false;
    }
  }
}
