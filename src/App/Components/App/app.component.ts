import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuildComponent } from '../Guild/guild.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GuildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dozedex';
}
