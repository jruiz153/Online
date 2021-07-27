import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EnviaService } from 'src/app/services/envia.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { ColaService } from '../../services/cola.service';
import { ToolsService } from '../../../services/tools.service';

@Component({
  selector: 'app-cola-impresion',
  templateUrl: './cola-impresion.component.html',
  styleUrls: ['./cola-impresion.component.css']
})
export class ColaImpresionComponent implements OnInit {
  public frmCola: FormGroup;
  public form: FormGroup;
  public totalGuias = 0;
  usuario: any;
  cuentas = [];
  guias = [];
  isCargando = false;
  cuenta = '';
  marcados = [];
  selected = [];
  messages = [];

  get ordersFormArray() {
    return this.frmCola.controls.chks as FormArray;
  }

  submit(){
    alert('jaiem');
  }
  constructor(
      private enviaService: EnviaService,
      private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder,
      private nb: NavbarService,
      private colaService: ColaService,
      public user: AuthService,
      private tools: ToolsService) {

      this.usuario = user.usuario;
      this.cuentas = user.usuario.Cuentas;

      this.frmCola = this.formBuilder.group({
          txtF1: ['Ingrese fecha', Validators.required],
          txtF2: ['Ingrese fecha 2', Validators.required],
          txtFecha1: ['', Validators.required],
          drpCuenta: [''],
          chks: new FormArray([])
       });

      //this.addCheckboxes();
  }
  ngOnInit(): void {
    this.nb.asignarTituloOpcion('Cola de impresión');
    this.tools.mostrarNavbar();
  }

  consultarCola(){
    this.cuenta = this.frmCola.get('drpCuenta').value;
    const res = this.cuenta.split('-');

    const data = {
      cod_regional: this.usuario.Cod_Regional,
      cod_oficina: this.usuario.Cod_Oficina,
      cod_usr_mod: this.usuario.Usuario,
      f1: '23/12/2020',
      f2: '23/12/2020',
      /*f1: this.frmCola.get('txtF1').value,
      f2: this.frmCola.get('txtF2').value,*/
      nit: '',
      cuenta: this.frmCola.get('drpCuenta').value,

      reg: res[0],
      ofi: res[1],
      cta: res[2],
    };

    console.log(data);

    this.colaService.getColImpresion(data).subscribe(
      (res: any) => {
        this.guias = res;
        console.log(res);
        //this.addCheckboxes();
      },
      err => {
        console.log(err);
      }
    );
  }
  marcar(checked, model){
    if (this.marcados.indexOf(model.Guia) === -1){
       this.marcados.push(model.Guia);
    }
    else{
       this.marcados.splice(this.marcados.indexOf(model.Guia), 1);
    }
    console.log(this.marcados);
  }

  /* private addCheckboxes() {
    this.guias.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  } */

}
