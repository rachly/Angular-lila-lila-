import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallreyCarousalComponent } from './gallrey-carousal.component';

describe('GallreyCarousalComponent', () => {
  let component: GallreyCarousalComponent;
  let fixture: ComponentFixture<GallreyCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallreyCarousalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallreyCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
