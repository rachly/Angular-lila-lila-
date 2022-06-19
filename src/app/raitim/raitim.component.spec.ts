import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaitimComponent } from './raitim.component';

describe('RaitimComponent', () => {
  let component: RaitimComponent;
  let fixture: ComponentFixture<RaitimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaitimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaitimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
