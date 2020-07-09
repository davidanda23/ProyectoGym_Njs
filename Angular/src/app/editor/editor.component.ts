import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  bandera:boolean;

  constructor() { this.bandera=true;
    setTimeout(() => { this.bandera=false; }, 200);}

  ngOnInit(): void {
  }

}
