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
    {id: 17, name:'Ballet'},
    {id: 17, name:'Belly Dance'},
    {id: 3, name:'bolero'},
    {id: 17, name:'Bollywood'},
    {id: 17, name:'Broadway'},
    {id: 13, name:'Cha-Cha-Cha'},
    {id: 16, name:'Contemporary'},
    {id: 17, name:'Country-Western'},
    {id: 4, name:'Cumbia'},
    {id: 17, name:'Disco'},
    {id: 17, name:'Hip Hop'},
    {id: 15, name: 'Jive'},
    {id: 5, name:'Kizomba'},
    {id: 6, name:'Merengue'},
    {id: 7, name:'Paso Doble'},
    {id: 7, name:'Porro'},
    {id:14, name:'Rumba'},
    {id: 8, name:'Salsa'},
    {id: 9, name:'Salsa Caleña'},
    {id: 10, name:'Salsa Cubano'},
    {id:16, name:'Samba'},
    {id: 11, name:'Reggaeton'},
    {id: 17, name:'Tango'},
    {id: 17, name:'Ballet'},
    {id: 17, name:'Waltz'},
    {id: 17, name:'West Coast Swing'},
    {id: 12, name:'Zouk'}
  ];

}
