import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcteristicasArticuloComponent } from './carcteristicas-articulo.component';

describe('CarcteristicasArticuloComponent', () => {
  let component: CarcteristicasArticuloComponent;
  let fixture: ComponentFixture<CarcteristicasArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarcteristicasArticuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarcteristicasArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
