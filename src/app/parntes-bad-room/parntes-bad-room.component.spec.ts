import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParntesBadRoomComponent } from './parntes-bad-room.component';

describe('ParntesBadRoomComponent', () => {
  let component: ParntesBadRoomComponent;
  let fixture: ComponentFixture<ParntesBadRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParntesBadRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParntesBadRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
