import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCardModule, MatMenuModule, MatGridListModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesService } from './services/episodes.service';
import {SearchPipe} from './pipes';
import {AppComponent} from './app.component';
import { EpisodeslistComponent } from './components/episodeslist/episodeslist.component';
import { EpisodecardComponent } from './components/episodecard/episodecard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const appRoutes: Routes = [
  { path: 'seasons/:id',      component: EpisodeslistComponent },
  { path: '',
    redirectTo: 'seasons/0',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    EpisodeslistComponent,
    EpisodecardComponent,
    SearchPipe,
    NotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
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
