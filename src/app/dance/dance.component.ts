import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { dance } from './dance';

@Component({
  selector: 'app-dance',
  imports: [MatCardModule, MatButtonModule,MatGridListModule],
  templateUrl: './dance.component.html',
  styleUrl: './dance.component.scss'
})
export class DanceComponent {


  dances : dance[] = [
    {id: 1, name:'Afrobeats',family: 'African'},
    {id: 2, name:'Bachata', family: 'Latin'},
    {id: 3, name:'Ballet'},
    {id: 4, name:'Belly Dance'},
    {id: 5, name:'Bolero', family: 'Spanish'},
    {id: 6, name:'Bollywood'},
    {id: 7, name:'Broadway'},
    {id: 8, name:'Cha-Cha-Cha'},
    {id: 9, name:'Contemporary'},
    {id: 10, name:'Country-Western'},
    {id: 11, name:'Cumbia', family: 'Latin'},
    {id: 12, name:'Disco'},
    {id: 13, name:'Hip Hop'},
    {id: 14, name: 'Jive'},
    {id: 15, name:'Kizomba',family: 'African'},
    {id: 16, name:'Merengue',family: 'Latin'},
    {id: 17, name:'Paso Doble'},
    {id: 18, name:'Porro', family: 'Latin'},
    {id: 19, name:'Rumba',family: 'Ballroom'},
    {id: 20, name:'Salsa',family: 'Latin'},
    {id: 21, name:'Salsa Caleña', family: 'Latin'},
    {id: 22, name:'Salsa Cubano', family: 'Latin'},
    {id: 23, name:'Samba'},
    {id: 24, name:'Reggaeton', family: 'Latin'},
    {id: 25, name:'Tango', family: 'Latin'},
    {id: 26, name:'Viennese Waltz', family: 'Ballroom'},
    {id: 27, name:'Waltz', family: 'Ballroom'},
    {id: 28, name:'West Coast Swing'},
    {id: 29, name:'Zouk', family: 'Latin'}
  ];

}
