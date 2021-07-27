import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { EnviaService } from 'src/app/services/envia.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { ToolsService } from 'src/app/services/tools.service';
import { MonitorService } from '../../services/monitor.service';

@Component({
  selector: 'app-monitor-reparto',
  templateUrl: './monitor-reparto.component.html',
  styleUrls: ['./monitor-reparto.component.css']
})
export class MonitorRepartoComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private nb: NavbarService,
              private user: AuthService,
              private enviaService: EnviaService,
              private monitorService: MonitorService,
              private tools: ToolsService,
              private dialog: MatDialog) {
                  }

  ngOnInit(): void {
    this.nb.asignarTituloOpcion('Monitor de reparto');
    this.tools.mostrarNavbar();
  }

}
