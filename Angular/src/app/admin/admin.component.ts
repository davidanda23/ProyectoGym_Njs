import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { DataAdminService } from '../services/data-admin.service';
import { InscritosInterface } from '../models/inscritos';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  

  constructor(private dataApi: DataAdminService) {
    this.dataApi.getAllsubs().subscribe(subs => {
      console.log(subs)

    } )
  }

  public subs = [];
  public sub = [];
  public alumnos = [];
  public inscritos = [];
  public clases = [];
  public idClases=[];
  public CLASES = <InscritosInterface>[];

  ngOnInit() {
    this.dataApi.getAllsubs().subscribe(subs => {
      
      for (let i = 0; i < subs.length; i++) {
        this.CLASES[i] = subs[i];
        this.inscritos[i] = subs[i].miembros;
        this.clases[i] = subs[i].clase;
        this.idClases[i] = subs[i].id;
        console.log(this.idClases);


        this.lineChartData[0].data[i] = subs[i].miembros;
        this.lineChartLabels[i]= this.clases[i];
      }
      this.chart.update();
    } )
  }

  public lineChartData: ChartDataSets[] = [
    //{ data: [900, 80, 10], label: 'Inscritos' , yAxisID: 'y-axis-1' },
    { data: [], label: 'Usuarios Inscritos',yAxisID:'Inscritos' }
  ];
  
  
  //public lineChartLabels: Label[] = ['Zumba', 'Box', 'Pesas', 'Crossfit', 'Spinning'];
  public lineChartLabels: Label[] = [];
  
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'Inscritos',
          position: 'right',
          gridLines: {
            color: 'white',
          },
          ticks: {
            fontColor: 'white',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'whitesmoke',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'whitesmoke',
            content: 'LineAnno'
          }
        },
      ],
    },
  };

  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'white',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: 'whitesmoke',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  
  
  
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  AltaClase(formAlta: NgForm): void{
    
    this.dataApi.addClase(formAlta.value);
    this.chart.update();
  }

  BajaClase(nombreClase: String):void{
    console.log(nombreClase);
    this.dataApi.deleteClase(nombreClase);
    this.chart.update();
  }

  ModificarClase(formUpgrade: NgForm, index: number): void{ 
    console.log(index, formUpgrade.value.atributo, this.CLASES[index]);
    switch(formUpgrade.value.atributo){
      case "clase":{
        this.CLASES[index].clase=formUpgrade.value.value;
        break;
      }
      case "desc":{
        this.CLASES[index].desc=formUpgrade.value.value;
        break;
      }
      case "instructor":{
        this.CLASES[index].instructor=formUpgrade.value.value;
        break;
      }
      case "miembros":{
        this.CLASES[index].miembros=formUpgrade.value.value;
        break;
      }
    }
    console.log(index, formUpgrade.value.atributo, this.CLASES[index]);
    this.dataApi.updateClase(this.CLASES[index]);
  }

}
