import { Component, OnInit } from '@angular/core';
import { EpisodecardComponent } from '../episodecard/episodecard.component';
import { EpisodesService } from '../../services/episodes.service';
import { Observable } from 'rxjs/observable';
import { Episode } from '../../models/episode.model';

@Component({
  selector: 'app-episodeslist',
  templateUrl: './episodeslist.component.html',
  styleUrls: ['./episodeslist.component.css']
})
export class EpisodeslistComponent implements OnInit {
  episodes: Episode[] = [];
  episodeNames: String[] = [];
  errorMessage: String = '';
  isLoading: Boolean = true;
  nameFragment: String = '';
  constructor(private episodesService: EpisodesService) {
  }
  ngOnInit() {
    this.episodesService.getEpisodes(0).subscribe(
      episodes => {
        this.episodes = episodes.data.episodes;
        this.episodes.forEach(episode => {this.episodeNames.push(episode.name); });
      },
      error => { this.errorMessage = error; console.log(error); },
      () => { this.isLoading = false; }
    );
  }

}
