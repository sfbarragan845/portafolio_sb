import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMenuComponent } from './components/my-menu/my-menu.component';
import {MatCardModule} from '@angular/material/card';
import { PresentationInfoComponent } from './components/presentation-info/presentation-info.component';



@NgModule({
  declarations: [
    PresentationInfoComponent
  ],
  imports: [
    CommonModule,
    MyMenuComponent,
    MatCardModule
  ],
  exports: [
    MyMenuComponent,
    PresentationInfoComponent
  ]
})
export class SharedModule { }
