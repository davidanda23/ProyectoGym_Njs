import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators, ControlContainer} from '@angular/forms';
import {AuthService} from './../services/auth.service';
import { Router } from '@angular/router';
import {user} from '../../shared/models/user.interface';
import Swall from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.minLength(2),Validators.email]),
    password: new FormControl('',Validators.required,),
    confirmPassword: new FormControl('',[Validators.required])
  })
  bandera:boolean;
  constructor(private authSvc: AuthService, private router: Router) { 
    this.bandera=true;
    setTimeout(() => { this.bandera=false; }, 1000);
  }

  ngOnInit(): void {
  }
  async onRegister(){
    const {email, password, confirmPassword} = this.registerForm.value;
    
    try{
      const user = await this.authSvc.register(email, password);
      if(user){
        this.checkUserIsVerified(user);
      } 
      if(password === confirmPassword){
        console.log("Contraseñas coinciden");
      }else{
        console.log("Contraseñas no coinciden");
      }
    }
    catch(error){console.log(error)}
  }

  private checkUserIsVerified(user:user){
    if(user && user.emailVerified){
      this.router.navigate(['/home']);
    }else if(user){
      this.router.navigate(['/verification-email']);
    }else{
      this.router.navigate(['/register']);
    }
  }
  
  public passwordsMatch(group: FormGroup){
    if(group.get('password').value === group.get('confirmPassword').value ){
      return true;
    }else{
      return false;
    }
  }
  sendAlert(){
    Swall.fire({
      title: "Error!",
      text: "Ingrese el formato correcto en todos los campos"
    });
  }
}
