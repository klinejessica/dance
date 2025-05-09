import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips'
import { instructor } from './instructor';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-instructors',
  imports: [MatCardModule, MatChipsModule, MatGridListModule],
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.scss'
})
export class InstructorsComponent {


  instructors: instructor[] = [
    {id: 1, name:"Gero & Migle", styles: ['Bachata']},
    {id: 2, name:"Ronald & Alba", styles: ['Bachata']},
    {id: 3, name:"Junior & Carolina", styles: ['Bachata']},
    {id: 4, name:"Janis & Zoe", styles: ['Bachata']},
    {id: 5, name:"David Y Ines", styles: ['Bachata']},
    {id: 6, name:"Pablo & Raquel", styles: ['Bachata']},
    {id: 7, name:"Cristian & Gabriella", styles: ['Bachata']},
    {id: 8, name:"Jarianny", styles: ['Salsa']},
    {id: 9, name:"Klau & Ros", styles: ['Bachata']},
    {id: 10, name:"Ken & Bryn", styles: ['West Coast Swing']},
    {id: 11, name:"Anna", styles: ['Bachata']},
    {id: 12, name:"María Brontóns", styles: ['Bachata', 'Salsa']},
    {id: 13, name:"Jesus & Isa", styles: ['Bachata']},
    {id: 14, name:"Lorena", styles: ['Bachata']},
    {id: 15, name:"Carlos y Susan", styles: ['Bachata']},
    {id: 16, name:"Thibault & Nicole", styles: ['West Coast Swing']},
    {id: 17, name:"Loic", styles: ['Afrobeats']},
    {id: 18, name:"Marco & Sara", styles: ['Bachata']},
    {id: 19, name:"Isabel", styles: ['Afrobeats']},
    {id: 20, name:"Gero & Migle", styles: ['Bachata']},
    {id: 21, name:"Gero & Migle", styles: ['Bachata']},
    {id: 22, name:"Gero & Migle", styles: ['Bachata']},
    {id: 23, name:"Gero & Migle", styles: ['Bachata']},
    {id: 24, name:"Gero & Migle", styles: ['Bachata']},
    {id: 25, name:"Gero & Migle", styles: ['Bachata']}
  ];

}
