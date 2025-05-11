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
    { id: 1, name: 'Majao', location: 'Medelíln', ig:'@Majao', website: 'NA'}
    
  ];