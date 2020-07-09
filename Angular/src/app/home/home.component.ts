import { AuthService } from './../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {user} from '../shared/models/user.interface';
import { auth } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  bandera:boolean;

  constructor(private authService: AuthService) {
    this.bandera=true;
    setTimeout(() => { this.bandera=false; }, 200);
  }

  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe(auth =>{
      if(auth){
        this.userUid=auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole =>{
          this.isAdmin = Object.assign({}, userRole.role).hasOwnProperty('admin');
        })
      }
    })
  }

}
