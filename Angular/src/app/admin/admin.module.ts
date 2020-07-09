import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartsModule,
    FormsModule
  ]
})
export class AdminModule { }