import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../../models/episode.model';

@Component({
  selector: 'app-episodecard',
  templateUrl: './episodecard.component.html',
  styleUrls: ['./episodecard.component.css']
})
export class EpisodecardComponent implements OnInit {
  @Input() episode: Episode;
  constructor() { }

  ngOnInit() {
  }
  truncate(summary: string) {
    return summary.replace(/<(?:.|\n)*?>/gm, '').substr(0, 253);
  }

}
