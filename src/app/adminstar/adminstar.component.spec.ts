import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstarComponent } from './adminstar.component';

describe('AdminstarComponent', () => {
  let component: AdminstarComponent;
  let fixture: ComponentFixture<AdminstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
