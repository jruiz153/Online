import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { AuthService } from '../../services/auth.service';
import { ToolsService } from '../../services/tools.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  res: any;
  constructor(public auth: AuthService, public nb: NavbarService, public tools: ToolsService) { }

  ngOnInit(): void {
    this.res = this.auth.isAuthenticated();
  }

  onabrirPanelDerecha(): void{
    this.tools.cambiarPosicionMenu('end');
    this.toggleSidenav.emit();
  }
}
