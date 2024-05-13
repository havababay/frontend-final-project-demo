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
  duration = 0;
  durationMessage = '';

  private readonly messages: string[] = [
    'Hello, world!',
    'Keep coding!',
    'Stay curious!',
  ];

  handleDurationChange(seconds : number) {
    this.duration = seconds;
    const messageIndex = this.duration % this.messages.length;
    this.durationMessage = this.messages[messageIndex];
  }
}
