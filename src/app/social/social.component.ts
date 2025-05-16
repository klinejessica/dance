import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-social',
  imports: [MatButtonModule, MatGridListModule, MatCardModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {

}
