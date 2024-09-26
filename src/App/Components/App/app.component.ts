import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { SplashScreenComponent } from "../splash-screen/splash-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SplashScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dozedex';
}
