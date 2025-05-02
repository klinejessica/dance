import { Component } from '@angular/core';


import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgForOf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  imports: [MatSelectModule, MatFormFieldModule, MatButtonModule, MatInputModule, GoogleMapsModule,NgForOf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  center: google.maps.LatLngLiteral = { lat: 6.2440317440866, lng: -75.57948896663142};
  markerLatLong: google.maps.LatLngLiteral[] = [{ lat: 6.243644005067747, lng: -75.5793795041487}];



}
