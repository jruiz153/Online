import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modal-estadistica-reparto',
  templateUrl: './modal-estadistica-reparto.component.html',
  styleUrls: ['./modal-estadistica-reparto.component.css']
})
export class ModalEstadisticaRepartoComponent implements OnInit {
  form: FormGroup;
  guias: any = [];
  titulo = '';

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<ModalEstadisticaRepartoComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {

  console.log(data);
  this.titulo = data.title;
  this.guias = data.guias;

  this.form = this.fb.group({
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.dialogRef.close(this.form);
  }

  onCloseDialog(){
    this.dialogRef.close();
  }
}
