import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { SplashScreenComponent } from "../splash-screen/splash-screen.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SplashScreenComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements SplashScreenComponent {
  title = 'dozedex';
  showSplash: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSplash = !this.showSplash;
    }, 3000);
  }
}
