import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitronimComponent } from './mitronim.component';

describe('MitronimComponent', () => {
  let component: MitronimComponent;
  let fixture: ComponentFixture<MitronimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitronimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MitronimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
