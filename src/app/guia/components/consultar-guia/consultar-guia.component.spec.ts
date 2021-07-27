import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarGuiaComponent } from './consultar-guia.component';

describe('ConsultarGuiaComponent', () => {
  let component: ConsultarGuiaComponent;
  let fixture: ComponentFixture<ConsultarGuiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarGuiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
