import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMenuComponent } from './components/my-menu/my-menu.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MyMenuComponent,
    MatCardModule
  ],
  exports: [
    MyMenuComponent
  ]
})
export class SharedModule { }
