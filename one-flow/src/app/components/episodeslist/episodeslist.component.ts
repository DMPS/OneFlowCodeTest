import { Component, OnInit } from '@angular/core';
import { EpisodecardComponent } from '../episodecard/episodecard.component';
import { EpisodesService } from '../../services/episodes.service';
import { Episode } from '../../models/episode.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-episodeslist',
  templateUrl: './episodeslist.component.html',
  styleUrls: ['./episodeslist.component.css']
})
export class EpisodeslistComponent implements OnInit {
  gqlData$: Observable<any>;
  episodes: Episode[] = [];
  episodeNames: String[] = [];
  errorMessage: String = '';
  isLoading: Boolean = true;
  nameFragment: String = '';
  constructor(private route: ActivatedRoute,
    private router: Router,
    private episodesService: EpisodesService
  ) {
  }
  ngOnInit() {
    this.gqlData$ = this.route.paramMap.switchMap((params: ParamMap) => {
      return this.episodesService.getEpisodes(params.get('id'));
    });
  }
}
