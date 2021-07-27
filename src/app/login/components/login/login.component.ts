import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnviaService } from '../../../services/envia.service';
import { ToolsService } from '../../../services/tools.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public frmLogin: FormGroup;
  usuario;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private tools: ToolsService) {
    this.frmLogin = this.fb.group({
      txtUsuario: ['', Validators.required],
      txtPassword: ['', Validators.required],
   });
  }

  ngOnInit(): void {
    this.tools.esconderNavbar();
  }

  submit() {
    if (this.frmLogin.invalid) {
      this.tools.mensaje_error('Debe diligenciar todos los datos');
      return false;
      }
      else{
          const data: any = {
            Usuario: this.frmLogin.value.txtUsuario,
            Password: this.frmLogin.value.txtPassword,
          };

          this.authService.login(null, data).subscribe(
            response => {
                if (response.Cod_Regional !== 0){
                  this.router.navigateByUrl('/inicio');
                }
                else{
                  this.tools.mensaje_error('Usuario invalido');
                }
            },
            error => {
              console.log(error);
              this.tools.mensaje_ok('error conectando a la API');
            });
      }
  }
}
