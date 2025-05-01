import { Routes } from '@angular/router';
import { DanceComponent } from './dance/dance.component';
import { ScheduleComponent } from './schedule/schedule.component';

export const routes: Routes = [
    { path: "dance", component: DanceComponent },
    { path: "schedule", component: ScheduleComponent }
];
