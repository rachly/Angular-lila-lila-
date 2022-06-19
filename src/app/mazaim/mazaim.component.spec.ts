import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazaimComponent } from './mazaim.component';

describe('MazaimComponent', () => {
  let component: MazaimComponent;
  let fixture: ComponentFixture<MazaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MazaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MazaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
