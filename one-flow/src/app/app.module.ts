import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatGridListModule, MatToolbarModule, MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { EpisodesService } from './services/episodes.service';

import {AppComponent} from './app.component';
import { EpisodeslistComponent } from './components/episodeslist/episodeslist.component';
import { EpisodecardComponent } from './components/episodecard/episodecard.component';


@NgModule({
  declarations: [
    AppComponent,
    EpisodeslistComponent,
    EpisodecardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [EpisodesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
