import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from '../shared/model/person';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [
    CommonModule, MatCardModule
  ],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonCardComponent { 
  @Input()
  currentPerson? : Person;

  getAgeStyle() : string {
    if (!this.currentPerson?.age) {
      return '';
    } else if (this.currentPerson?.age < 18) {
      return 'age-young';
    } else if (this.currentPerson?.age >= 18 && 
      this.currentPerson?.age < 40) {
      return 'age-adult';
    } else {
      return 'age-senior';
    }
  }
}
