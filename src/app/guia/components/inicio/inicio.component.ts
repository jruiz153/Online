import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavbarService } from '../../../services/navbar.service';
import { ToolsService } from '../../../services/tools.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  form: FormGroup;
  ordersData = [
    { id: 100, name: 'order 1' },
    { id: 200, name: 'order 2' },
    { id: 300, name: 'order 3' },
    { id: 400, name: 'order 4' }
  ];

  get ordersFormArray() {
    return this.form.controls.orders as FormArray;
  }

  constructor(private nb: NavbarService, private tools: ToolsService, private formBuilder: FormBuilder) {
    this.nb.asignarTituloOpcion('Bienvenido a envia');
    this.tools.mostrarNavbar();

    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.ordersData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }

  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((checked, i) => checked ? this.ordersData[i].id : null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);
  }

  ngOnInit(): void {
  }

}
