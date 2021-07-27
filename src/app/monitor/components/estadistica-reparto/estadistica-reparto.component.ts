import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavbarService } from '../../../services/navbar.service';
import { AuthService } from '../../../services/auth.service';
import { EnviaService } from 'src/app/services/envia.service';
import { MonitorService } from '../../services/monitor.service';
import { ToolsService } from '../../../services/tools.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalEstadisticaRepartoComponent } from '../../../shared/modals/modal-estadistica-reparto/modal-estadistica-reparto.component';

@Component({
  selector: 'app-estadistica-reparto',
  templateUrl: './estadistica-reparto.component.html',
  styleUrls: ['./estadistica-reparto.component.css']
})
export class EstadisticaRepartoComponent implements OnInit {
  forma: FormGroup;
  regionales: any = [];
  cuentas = [];
  estadisticas: any = [];
  guias: any = [];
  cargando = false;
  isDetalle = false;
  f1 = '';
  f2 = '';
  origen = 0;
  destino = 0;
  myDate = new Date();
  tituloDetalle = '';
  fileNameDialogRef: MatDialogRef<ModalEstadisticaRepartoComponent>;

  constructor(private fb: FormBuilder,
              private nb: NavbarService,
              private user: AuthService,
              private enviaService: EnviaService,
              private monitorService: MonitorService,
              private tools: ToolsService,
              private dialog: MatDialog) {

              this.cargarFormulario();
              this.cuentas = this.user.usuario.Cuentas;
              }

  ngOnInit(): void {
    this.nb.asignarTituloOpcion('Estadistica reparto');
    this.tools.mostrarNavbar();
    this.cargarRegionales();
  }

  cargarFormulario(){
    this.forma = this.fb.group({
      drpCuenta: ['', Validators.required],
      txtFechaIni: ['', Validators.required],
      txtFechaFin: ['', Validators.required],
      drpEmbalaje: ['', Validators.required],

      drpRegionalO1: [''],
      drpRegionalD1: [''],
      drpRegionalO2: [''],
      drpRegionalD2: [''],
      rdTipo: [],
      rdTipo2: [],
    });
  }

  cargarRegionales(){
    this.enviaService.getRegionales()
      .subscribe( res => {
        this.regionales = res;
      },
      err => {
        alert(err);
      });
  }

  submit(){
    console.log(this.forma);

    if (this.forma.invalid){
      this.tools.mensaje_error('Debe diligenciar toda la info');
    }
    else{

    if (this.forma.get('rdTipo').value == 1) {
        this.origen = this.forma.get('drpRegionalO1').value;
        this.destino = this.forma.get('drpRegionalD1').value;
    }
    else {
      this.origen = this.forma.get('drpRegionalO2').value;
      this.destino = this.forma.get('drpRegionalD2').value;
    }
    const data = {
      cuenta: this.forma.get('drpCuenta').value,
      embalaje: this.forma.get('drpEmbalaje').value,
      tipo: this.forma.get('rdTipo').value,
      origen: this.origen,
      destino: this.destino,
      f1: this.forma.get('txtFechaIni').value,
      f2: this.forma.get('txtFechaFin').value,
    };

    this.cargando = true;
    this.monitorService.getEstadisticaReparto(data).
      subscribe( (res: any) => {
        this.estadisticas = res;
        this.cargando = false;

        if (res.length == 0){
          this.tools.mensaje_error('No se encontro información');
        }
      });
    }
  }

  verDetalle(model, columnaC){
    this.tituloDetalle = columnaC + ' ' + model.Nom_Regional;
    this.isDetalle = true;

    if (this.forma.get('rdTipo').value == 1) {
      this.origen = this.forma.get('drpRegionalO1').value;
      this.destino = model.Cod_Regional;
    }
    else {
        this.origen = model.Cod_Regional;
        this.destino = this.forma.get('drpRegionalO2').value;
    }

    const data = {
      cuenta: this.forma.get('drpCuenta').value,
      embalaje: this.forma.get('drpEmbalaje').value,
      tipo: this.forma.get('rdTipo').value,
      origen: this.origen,
      destino: this.destino,
      f1: this.forma.get('txtFechaIni').value,
      f2: this.forma.get('txtFechaFin').value,
      columna: columnaC,
    };

    this.cargando = true;
    this.monitorService.getDetalleEstadisticaReparto(data).
      subscribe( (res: any) => {
        this.guias = res;
        this.cargando = false;
      });
   }

   verDetalleModal(model, columnaC){
    if (this.forma.get('rdTipo').value == 1) {
      this.origen = this.forma.get('drpRegionalO1').value;
      this.destino = model.Cod_Regional;
    }
    else {
        this.origen = model.Cod_Regional;
        this.destino = this.forma.get('drpRegionalD2').value;
    }

    const data = {
      cuenta: this.forma.get('drpCuenta').value,
      embalaje: this.forma.get('drpEmbalaje').value,
      tipo: this.forma.get('rdTipo').value,
      origen: this.origen,
      destino: this.destino,
      f1: this.forma.get('txtFechaIni').value,
      f2: this.forma.get('txtFechaFin').value,
      columna: columnaC,
    };

    this.cargando = true;
    this.monitorService.getDetalleEstadisticaReparto(data).
      subscribe( (res: any) => {
        this.guias = res;
        this.cargando = false;

        this.fileNameDialogRef = this.dialog.open(ModalEstadisticaRepartoComponent,
          { width: '900px', height: '350px', data: { title : columnaC + '-' + model.Nom_Regional, guias: this.guias } });

        this.fileNameDialogRef.afterClosed().subscribe(result => {
          console.log(result);
            //alert(result.value.devicename + '--' + result.value.nombre);
        });

      });
  }
}
