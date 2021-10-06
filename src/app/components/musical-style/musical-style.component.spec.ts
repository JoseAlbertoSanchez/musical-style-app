import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalStyleComponent } from './musical-style.component';

describe('MusicalStyleComponent', () => {
  let component: MusicalStyleComponent;
  let fixture: ComponentFixture<MusicalStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicalStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
