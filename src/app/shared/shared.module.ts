import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMenuComponent } from './components/my-menu/my-menu.component';
import {MatCardModule} from '@angular/material/card';
import { PresentationInfoComponent } from './components/presentation-info/presentation-info.component';
import { TechnologiesInfoComponent } from './components/technologies-info/technologies-info.component';
import { ProjectsInfoComponent } from './components/projects-info/projects-info.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';



@NgModule({
  declarations: [
    PresentationInfoComponent,
    TechnologiesInfoComponent,
    ProjectsInfoComponent,
    ContactSectionComponent
  ],
  imports: [
    CommonModule,
    MyMenuComponent,
    MatCardModule
  ],
  exports: [
    MyMenuComponent,
    PresentationInfoComponent,
    TechnologiesInfoComponent,
    ProjectsInfoComponent,
    ContactSectionComponent
  ]
})
export class SharedModule { }
