import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsBadRoomComponent } from './kids-bad-room.component';

describe('KidsBadRoomComponent', () => {
  let component: KidsBadRoomComponent;
  let fixture: ComponentFixture<KidsBadRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsBadRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsBadRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
