import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarGuiasComponent } from './consultar-guias.component';

describe('ConsultarGuiasComponent', () => {
  let component: ConsultarGuiasComponent;
  let fixture: ComponentFixture<ConsultarGuiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarGuiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarGuiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
