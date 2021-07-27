import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EnviaService } from 'src/app/services/envia.service';
import { ToolsService } from 'src/app/services/tools.service';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-anular-guia',
  templateUrl: './anular-guia.component.html',
  styleUrls: ['./anular-guia.component.css']
})
export class AnularGuiaComponent implements OnInit {
  forma: FormGroup;
  isAnulando = false;

  constructor(private fb: FormBuilder,
              private enviaService: EnviaService,
              public user: AuthService,
              public nb: NavbarService,
              public tools: ToolsService) {
              this.forma = this.fb.group({
                txtGuia: ['', Validators.required],
                drpCausal: ['', Validators.required]
              });

            }

  ngOnInit(): void {
    this.nb.asignarTituloOpcion('Anular guía');
    this.tools.mostrarNavbar();
  }

  anularGuia(){

  }

}
