import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventWebsiteComponent } from './event-website.component';

describe('EventWebsiteComponent', () => {
  let component: EventWebsiteComponent;
  let fixture: ComponentFixture<EventWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
