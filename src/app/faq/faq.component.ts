import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Question } from './question';

@Component({
  selector: 'app-faq',
  imports: [MatExpansionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqsComponent {
  readonly panelOpenState = signal(false);

  questions: Question[]= [
    {id: 1, q:"Where is the studio located?", a:"The studio is right next to here and there."},
    {id: 2, q:"Where do I park?", a:"There is a small parking lot located on the side of the building. Otherwise, meters will charge until 10pm."},
    {id: 3, q:"What do I wear?", a:"Clothes that you can move around in"},
    {id: 4, q:"What shoes do I wear?", a:"Any shoes that will allow you to spin and move easily around in. Shoes wtih suede bottoms work. Rubber bottom shoes not so much."},
    {id: 5, q:"Do I need a partner?", a:"In partnerwork classes we will rotate partners, so you will experience dancing with other dancers. There is no requirement to bring a partner."}
  ];
}
