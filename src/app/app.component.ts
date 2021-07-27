import { Component, OnInit } from '@angular/core';
import { ToolsService } from './services/tools.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nav_position: string = 'start';
  
  constructor(public tools: ToolsService){
  }

  ngOnInit() {
 }
}
