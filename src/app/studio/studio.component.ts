import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Studio } from './studio';

@Component({
  selector: 'app-studio',
  imports: [MatTableModule],
  templateUrl: './studio.component.html',
  styleUrl: './studio.component.scss'
})
export class StudioComponent {
  displayedColumns: string[] = ['id','name', 'location', 'ig', 'website'];
  dataSource = studio;
 
}


 const studio: Studio[] = [
    { id: 1, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 2, name: 'Timbale', location: 'Medelíln', ig:'@Timbale', website: 'NA'},
    { id: 3, name: 'Energy Dance', location: 'Medelíln', ig:'@EnergyDance', website: 'NA'},
    { id: 4, name: 'Blood Dance', location: 'Medelíln', ig:'@BloodDance', website: 'NA'},
    { id: 5, name: 'Cielo', location: 'Costa Mesa', ig:'@Cielo', website: 'NA'},
    { id: 6, name: 'B-Sensual', location: 'Denver', ig:'@Bsensual', website: 'NA'},
    { id: 7, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 8, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 9, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 10, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 11, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 12, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 13, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 14, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 15, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 16, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 17, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 18, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 19, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 20, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 21, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 22, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 23, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 24, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    { id: 25, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'},
    
  ];