import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-dance',
  imports: [MatCardModule, MatButtonModule,MatGridListModule],
  templateUrl: './dance.component.html',
  styleUrl: './dance.component.scss'
})
export class DanceComponent {


  dances = [
    {id: 1, name:'Afrobeats'},
    {id: 2, name:'bachata'},
    {id: 3, name:'bolero'},
    {id: 4, name:'Cumbia'},
    {id: 5, name:'Kizomba'},
    {id: 6, name:'Merengue'},
    {id: 7, name:'Porro'},
    {id: 8, name:'Salsa'},
    {id: 9, name:'Salsa Caleña'},
    {id: 10, name:'Salsa Cubano'},
    {id: 11, name:'Reggaeton'},
    {id: 12, name:'Zouk'}
  ];

}
