import { Component } from '@angular/core';
import { GuildService } from '../../Services/Guild/Guild.service';
import { IGuild } from '../../Interfaces/Components/Guild/IGuild';
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
  public Guild: IGuild | null = null;

  public constructor(private guildService: GuildService) {
    this.GetAll();
    this.GetOne();
  }

  GetAll() {
    this.guildService.GetAll().subscribe(guild => this.Guilds = guild);
  }

  GetOne() {
    this.guildService.GetOneById(1).subscribe(guild => this.Guild = guild);
  }
}
