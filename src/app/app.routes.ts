import { Routes } from '@angular/router';
import { DanceComponent } from './dance/dance.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: "dance", component: DanceComponent },
    { path: "contact", component: ContactComponent}
];
