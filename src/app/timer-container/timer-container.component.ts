import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-timer-container',
  standalone: true,
  imports: [CommonModule, TimerComponent],
  templateUrl: './timer-container.component.html',
  styleUrl: './timer-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerContainerComponent {
  currentColor = '';

  handleColorChange(color : string) {
    this.currentColor = color;
  }
}
