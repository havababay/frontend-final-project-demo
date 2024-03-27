import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-random-team-selection',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './random-team-selection.component.html',
  styleUrl: './random-team-selection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomTeamSelectionComponent { }
