import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBotonComponent } from './nav-bar-boton.component';

describe('NavBarBotonComponent', () => {
  let component: NavBarBotonComponent;
  let fixture: ComponentFixture<NavBarBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarBotonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
