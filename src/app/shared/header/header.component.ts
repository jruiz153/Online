import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(public tools: ToolsService) { }

  ngOnInit(): void {
  }

  onToggleSidenav(): void{
   this.tools.cambiarPosicionMenu('start');
   this.toggleSidenav.emit();
  }

}
