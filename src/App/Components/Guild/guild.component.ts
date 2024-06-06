import { Component } from '@angular/core';
import { GuildService } from '../../Services/Guild/Guild.service';
import { IGuild } from '../../Interfaces/Guild/IGuild';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guild',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guild.component.html',
  styleUrl: './guild.component.css',
  providers: [GuildService]
})
export class GuildComponent {

  public Guilds: IGuild[] = [];

  public constructor(private guildService: GuildService) {
    this.GetAll();
  }

  GetAll() {
    this.guildService.GetAll().subscribe(guild => this.Guilds = guild);
  }
}
