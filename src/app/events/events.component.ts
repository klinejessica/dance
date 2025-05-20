import { Component } from '@angular/core';
import { events } from './event';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {


   event : events[] = [ 
    { id: 1, name: 'Bachata Mondays', when:'Every Monday', where:'Dance like nobody is watching', cover:'$10', parking: 'street/meters'},
    { id: 2, name: 'Bachata & Salsa Tuesdays', when:'Every 1st and 3rd Tuesdays', where:'Cha Cha Cha', cover:'$20', parking: 'parking lot'},
    { id: 3, name: 'West Coast Wednesdays', when:'Every Other Wednesday', where:'Swing, Swing, Swing', cover:'$15', parking: 'Meters'},
    { id: 4, name: 'Lain Thurdays', when:'Every Thursday', where:'Bailamos', cover:'Free', parking: 'Parking Lot'},
    { id: 5, name: 'Bachata Forever Fridays', when:'Every Friday', where:'Última', cover:'Free', parking: 'street/meters'},
    { id: 6, name: 'Saturday Salsa and More', when:'Every Monday', where:'Triple Step', cover:'$10', parking: 'Parking Lot/Street'},
    { id: 7, name: 'Ritmo y Flow', when:'1st Saturday', where:'Parque Libre', cover:'$20', parking: 'street/meters'},
  ];

}