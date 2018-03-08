import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodecardComponent } from './episodecard.component';

describe('EpisodecardComponent', () => {
  let component: EpisodecardComponent;
  let fixture: ComponentFixture<EpisodecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
