import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCardModule, MatMenuModule, MatGridListModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { EpisodesService } from './services/episodes.service';
import {SearchPipe} from './pipes';

import {AppComponent} from './app.component';
import { EpisodeslistComponent } from './components/episodeslist/episodeslist.component';
import { EpisodecardComponent } from './components/episodecard/episodecard.component';


@NgModule({
  declarations: [
    AppComponent,
    EpisodeslistComponent,
    EpisodecardComponent,
    SearchPipe
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
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [EpisodesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
