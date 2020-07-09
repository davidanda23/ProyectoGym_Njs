import { MensajeInterface } from './../models/api_mensaje';
import { ApiService } from './../services/apinode/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {
  bandera:boolean;
  
  constructor(private apiSvc: ApiService) { 
    this.bandera=true;
    setTimeout(() => { this.bandera=false; }, 1000);
  }

  ngOnInit(): void {
  }
  public mensaje = <MensajeInterface>[];
  getResultado(){
    const url = "http://localhost:3000/mensaje";
    this.apiSvc.getDatos(url).subscribe((data:any)=>{
      this.mensaje.valor= JSON.stringify(data);
      console.log(this.mensaje);
    })
  }
}
