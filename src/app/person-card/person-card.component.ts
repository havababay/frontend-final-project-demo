import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonCardComponent { }
