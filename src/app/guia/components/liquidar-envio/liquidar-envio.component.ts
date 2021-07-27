import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormasPagoModel } from 'src/app/models/formas-pago.model';
import { ServiciosModel } from 'src/app/models/servicios.model';
import { AuthService } from 'src/app/services/auth.service';
import { EnviaService } from 'src/app/services/envia.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { ToolsService } from 'src/app/services/tools.service';
import { CubicacionModel } from '../../../models/cubicacion.model';

@Component({
  selector: 'app-liquidar-envio',
  templateUrl: './liquidar-envio.component.html',
})
export class LiquidarEnvioComponent implements OnInit {
  forma: FormGroup;
  cuentas = [];
  servicios: ServiciosModel[] = [];
  formasPago: FormasPagoModel[] = [];
  objetoLlega: any;
  ciudadO: string;
  codCiudadO: number;
  ciudadD: string;
  codCiudadD: number;
  cotizando = false;
  cuenta: string;
  error = '';
  public liquidando = false;
  public liquidacion: any;
  listaCubicacion: Array<CubicacionModel> = [];
  public totalUnidadesG = 0;
  public totalPesoG = 0;
  public totalVolumenG = 0;
  public totalCobrarG = 0;

  public totalUnidades = 0;
  public totalPeso = 0;
  public totalVolumen = 0;
  public totalCobrar = 0;

  cargando = false;
  cubrimiento = '';
  diasEntrega = 0;
  peso: number;
  costoManejo: number;
  flete: number;
  total: number;
  otros: number;

  constructor(private nb: NavbarService,
              private fb: FormBuilder,
              public user: AuthService,
              private enviaService: EnviaService,
              public tools: ToolsService,
              private router: Router) {

    this.cargarFormulario();
    this.cuentas = user.usuario.Cuentas;
}

 ngOnInit(): void {
  this.nb.asignarTituloOpcion('Liquidar envío nuevo');
  this.tools.mostrarNavbar();
  }

 cargarFormulario(){
    this.forma = this.fb.group({
      drpCuenta: ['', Validators.required],
      drpFormaPago: ['', Validators.required],
      drpServicio: ['', Validators.required],

      txtUnidades: [],
      txtPeso: [],
      txtVolumen: [],

      txtUnidadesN: [],
      txtPesoN: [],
      txtAlto: [],
      txtLargo: [],
      txtAncho: [],

      txtValorDeclarado: [],
      chkInternacional: [],
    });
  }

  consultarCuentaSeleccionada(){
    this.consultarServicios();
    this.consultarFormasPago();
  }

  recibirMensajeO(objeto: any){
    this.objetoLlega = objeto;
    this.codCiudadO = objeto.Cod_Ciudad;
    this.ciudadO = objeto.Nom_Ciudad;
  }

  recibirMensajeD(objeto: any){
    this.objetoLlega = objeto;
    this.codCiudadD = objeto.Cod_Ciudad;
    this.ciudadD = objeto.Nom_Ciudad;
  }

  consultarServicios(){
    this.cuenta = this.forma.get('drpCuenta').value;
    const res = this.cuenta.split('-');

    const data = {
      Cod_Regional: res[0],
      Cod_Oficina: res[1],
      Cod_Cuenta: res[2],
      };

    this.enviaService.getServiciosCuenta(data)
        .subscribe( resp => {
          this.servicios = resp;
        },
        err => {
          alert('Error en servicios');
        }
      );
  }

  consultarFormasPago(){
    this.cuenta = this.forma.get('drpCuenta').value;
    const res = this.cuenta.split('-');

    const data = {
      Cod_Regional: res[0],
      Cod_Oficina: res[1],
      Cod_Cuenta: res[2],
      };

    this.enviaService.getFormasPagoCuenta(data)
        .subscribe( resp => {
          console.log(resp);
          this.formasPago = resp;
        },
        err => {
          alert('Error en formas');
        }
      );
  }

  agregarCubicacion(){
    const cubObj = new CubicacionModel();
    let constante = 400;
    let pesoCobrar = 0;
    let volumen = 0;
    let pesoK = 0;
    const servicio = this.forma.get('drpServicio').value;

    cubObj.unidades = this.forma.get('txtUnidades').value;
    cubObj.peso = this.forma.get('txtPeso').value;
    cubObj.volumen = this.forma.get('txtVolumen').value;

    if (servicio === 1 || servicio === 2 || servicio === 4 || servicio === 9 || servicio === 12 || servicio === 13){
      constante = 222;
    }
    else if (servicio === 7) {
      constante = 200;
    }

    pesoK = this.forma.get('txtUnidadesN').value * this.forma.get('txtPesoN').value;
    volumen = ((this.forma.get('txtAlto').value / 100) * (this.forma.get('txtAncho').value / 100) * (this.forma.get('txtLargo').value / 100) * constante * this.forma.get('txtUnidadesN').value)
    pesoCobrar = pesoK;

    if (volumen > pesoK) {
      pesoCobrar = volumen;
    }

    if (volumen < 1 && servicio !== 7) {
      volumen = 1;
    }

    cubObj.unidades = parseInt(this.forma.get('txtUnidadesN').value, 10);
    cubObj.peso =  this.forma.get('txtPesoN').value * this.forma.get('txtUnidadesN').value;
    cubObj.alto = this.forma.get('txtAlto').value;
    cubObj.ancho = this.forma.get('txtAncho').value;
    cubObj.largo = this.forma.get('txtLargo').value;

    cubObj.pesoK = Math.ceil(pesoK);
    cubObj.volumenK = Math.ceil(volumen);
    cubObj.pesoKobrar = Math.ceil(pesoCobrar);

    this.listaCubicacion.push(cubObj);

    this.forma.get('txtUnidadesN').setValue('');
    this.forma.get('txtPesoN').setValue('');
    this.forma.get('txtAlto').setValue('');
    this.forma.get('txtAncho').setValue('');
    this.forma.get('txtLargo').setValue('');

    this.totalCubicacion();
  }

  eliminarCubicacion(index){
        this.listaCubicacion.splice(index, 1);
        this.totalCubicacion();
  }

  totalCubicacion(){
    let totalUnidadesF = 0;
    let totalPeso = 0;
    let totalVolumen = 0;
    let totalCobrar = 0;

    this.listaCubicacion.forEach(function(value) {
      totalUnidadesF = totalUnidadesF + value.unidades;
      totalPeso += value.peso;
      totalVolumen += value.volumenK;
      totalCobrar += value.pesoKobrar;
    });

    this.totalUnidadesG = totalUnidadesF;
    this.totalPesoG = totalPeso;
    this.totalVolumenG = totalVolumen;
    this.totalCobrarG = totalCobrar;
  }

  submit(){

    if (this.forma.invalid){
      this.tools.mensaje_error('Debe diligenciar toda la info');
    }
    else{
      const servicio = this.forma.get('drpServicio').value;
      let internacional = '0';
      let unidadesd = 0;
      let pesod = 0;
      let volumend = 0;

      this.cuenta = this.forma.get('drpCuenta').value;
      const res = this.cuenta.split('-');
      this.cargando = true;

      if (this.forma.get('chkInternacional').value === true) {
        internacional = '1';
      }

      if (servicio == 2 || servicio == 3 || servicio == 12 || servicio == 13) {
        unidadesd = this.totalUnidadesG;
        pesod = this.totalPesoG;
        volumend = this.totalVolumenG;
      }
      else {
        unidadesd = this.forma.get('txtUnidades').value;
        pesod = this.forma.get('txtPeso').value;
        volumend = this.forma.get('txtVolumen').value;

        if (servicio === 7 && this.forma.get('chkInternacional').value !== true) {
            unidadesd = this.totalUnidadesG;
            pesod = this.totalPesoG;
            volumend = this.totalVolumenG;
        }
      }

      const data = {
        cod_regional_cta: res[0],
        cod_oficina_cta: res[1],
        cod_cuenta: res[2],
        ciudad_origen: this.codCiudadO,
        ciudad_destino: this.codCiudadD,
        cod_formapago: this.forma.get('drpFormaPago').value,
        cod_servicio: this.forma.get('drpServicio').value,
        num_unidades: unidadesd,
        mpesoreal_k: pesod,
        mpesovolumen_k: volumend,
        valor_declarado: this.forma.get('txtValorDeclarado').value,
        mca_docinternacional: internacional,
        con_cartaporte: 0,
        info_contenido: {
            num_documentos: ''
        }
      };
      this.cargando = true;
      this.error = '';
      console.log(data);

      this.enviaService.liquidarEnvio(data).subscribe(
        response => {
            console.log(response);
            this.liquidacion = response;
            this.cubrimiento = this.liquidacion.cubrimiento;
            this.diasEntrega = this.liquidacion.dias_entrega;
            this.peso = this.liquidacion.k_cobrados;
            this.costoManejo = this.liquidacion.valor_costom;
            this.flete = this.liquidacion.valor_flete;
            this.otros = this.liquidacion.valor_otros;
            this.total = this.liquidacion.valor_flete + this.liquidacion.valor_costom + this.liquidacion.valor_otros;
            this.cargando = false;
            this.error = '';
        },
        err => {
          console.log(err);
          this.error = err.error.respuesta;
          this.cargando = false;
        });
    }

  }

  nuevo(){
    alert('jaime');
    this.router.navigate(['/liquidar']);
  }

}
