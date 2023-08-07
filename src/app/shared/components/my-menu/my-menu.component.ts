import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.scss'],
  standalone: true,
  imports: [
    MatCardModule
  ],
})
export class MyMenuComponent {

}
