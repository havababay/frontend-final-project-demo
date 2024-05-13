import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input()
  maxDuration = 0;

  durationSoFar = 0;

  @Output()
  reportDuration = new EventEmitter<number>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timer?: any;

  ngOnInit(): void {
    this.timer = setInterval(() => this.increaseInterval(), 1000);
  }

  increaseInterval() {
    {
      ++this.durationSoFar;

      if (this.durationSoFar == this.maxDuration) {
        clearInterval(this.timer);
      } else {
        if (this.reportDuration) {
          this.reportDuration.emit(this.durationSoFar);
        }
      }
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  formatSecondsToMMSS(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
