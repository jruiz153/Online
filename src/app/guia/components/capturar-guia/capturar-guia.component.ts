import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { EnviaService } from 'src/app/services/envia.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { ToolsService } from 'src/app/services/tools.service';
import { GuiaService } from '../../services/guia.service';

@Component({
  selector: 'app-capturar-guia',
  templateUrl: './capturar-guia.component.html',
})
export class CapturarGuiaComponent implements OnInit {
  forma: FormGroup;
  cuentas = [];

  constructor(private fb: FormBuilder,
              private nb: NavbarService,
              private user: AuthService,
              private enviaService: EnviaService,
              private guiaService: GuiaService,
              private tools: ToolsService,
              private dialog: MatDialog) {

              this.cargarFormulario();
              }

  cargarFormulario(){
    this.forma = this.fb.group({
      hdfError: [''],
      txtNumCliente: [''],
      drpCuentas: ['', Validators.required],
      hdfCodDescription: [''],
    });
  }

  ngOnInit(): void {
    this.nb.asignarTituloOpcion('Capturar guía');
    this.tools.mostrarNavbar();
  }

  cotizar(){

  }
  
  capturarGuia(){

  }

}
