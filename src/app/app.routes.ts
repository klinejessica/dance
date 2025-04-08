import { Routes } from '@angular/router';
import { DanceComponent } from './dance/dance.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleComponent } from './schedule/schedule.component';

export const routes: Routes = [
    { path: "dance", component: DanceComponent },
    { path: "schedule", component: ScheduleComponent },
    { path: "dance", component: DanceComponent },
    { path: "contact", component: ContactComponent}
];
