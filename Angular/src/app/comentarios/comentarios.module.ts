import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComentariosService } from '../comentarios/comentarios.service';
import { ComentariosComponent} from '../comentarios/comentarios.component';
import { MessageService } from '../services/message.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ComentariosService,ComentariosService,MessageService],
  bootstrap: [ComentariosComponent]
})
export class ComentariosModule { }
