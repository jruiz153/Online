import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EnviaService } from 'src/app/services/envia.service';
import { ToolsService } from 'src/app/services/tools.service';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-consultar-carteran',
  templateUrl: './consultar-carteran.component.html',
  styleUrls: ['./consultar-cartera.component.css']
})
export class ConsultarCarteranComponent implements OnInit {

  forma: FormGroup;
  nits = [];
  cartera: any = [];
  detalleCartera: any = [];
  cuenta = '';
  nombreCuenta = '';
  cargando = false;
  cargandoD = false;
  totalVencidoG = 0;
  totalNoVencidoG = 0;
  totalMoraG = 0;
  totalVencidoGD = 0;
  totalNoVencidoGD = 0;
  totalMoraGD = 0;
  registros = 0;

  constructor(private fb: FormBuilder,
              private enviaService: EnviaService,
              public user: AuthService,
              public nb: NavbarService,
              public tools: ToolsService) {

              this.forma = this.fb.group ({
                drpCuenta: ['', Validators.required],
              });
              this.nits = this.user.usuario.Nits;
              }

  ngOnInit(): void {
    this.nb.asignarTituloOpcion('Cartera');
    this.tools.mostrarNavbar();

    if (this.nits.length == 1){
      this.forma.get('drpCuenta').setValue(this.nits[0].Num_Cliente);
    }
  }

  submit(){
    this.cargando = true;

    const data = {
      num_cliente: this.forma.get('drpCuenta').value
    };

    this.enviaService.getCartera(data)
    .subscribe ( (res: any) => {
        this.cartera = res;
        this.cargando = false;
        let totalVencido = 0;
        let totalNoVencido = 0;
        let totalMora = 0;

        if (res.length > 0){
          this.registros = res.length;
          this.nombreCuenta = res[0].Nom_Cuenta;

          res.forEach(function (value) {
            totalVencido += value.Vencido;
            totalNoVencido += value.No_Vencido;
            totalMora += value.Mora;
          });

          this.totalVencidoG = totalVencido;
          this.totalNoVencidoG = totalNoVencido;
          this.totalMoraG = totalMora;
        }
        else{
          this.tools.mensaje_error('No se encontro información');
        }

     },
     err => {
      console.log(err);
      this.cargando = false;
     });
  } //fin submit

  consultarDetalleCartera(c){
    this.cargandoD = true;
    let res = c.Cuenta.split('-');
    this.cuenta = c.Cuenta;

    const data = {
      num_cliente: this.forma.get('drpCuenta').value,
      cod_regional: res[0],
      cod_oficina: res[1],
      cod_cuenta: res[2],
    };

    let totalVencidoD = 0;
    let totalNoVencidoD = 0;
    let totalMoraD = 0;

    this.enviaService.getDetalleCartera(data)
    .subscribe( (response: any) => {
        this.detalleCartera = response;
        this.cargandoD = false;

        response.forEach(function (value) {
          totalVencidoD += value.Vencido;
          totalNoVencidoD += value.No_Vencido;
          totalMoraD += value.Mora;
        });

        this.totalVencidoGD = totalVencidoD;
        this.totalNoVencidoGD = totalNoVencidoD;
        this.totalMoraGD = totalMoraD;
    },
    err => {
      console.log(err);
      this.cargandoD = false;
    }
    );
  }

}
