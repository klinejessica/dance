import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DanceComponent } from './dance/dance.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FaqsComponent } from './faq/faq.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { StudioComponent } from './studio/studio.component';
import { SocialComponent } from './social/social.component';
import { EventsComponent } from './events/events.component';

export const routes: Routes = [
    {  path: '', component: HomeComponent},
    { path: "dance", component: DanceComponent },
    { path: "schedule", component: ScheduleComponent },
    { path: "dance", component: DanceComponent },
    { path: "contact", component: ContactComponent},
    { path: "faq", component: FaqsComponent},
    { path: "instructors", component: InstructorsComponent},
    { path: "studio", component: StudioComponent},
    { path: "socials", component: SocialComponent},
    {path: "events", component: EventsComponent}
];
