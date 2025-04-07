import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLinkActive,  HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dance';
}
