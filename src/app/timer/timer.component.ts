import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent implements OnInit, OnDestroy {
  @Output()
  timerColorChange = new EventEmitter<string>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timer?: any;

  private readonly background: string[] = [
    'red',
    'blue',
    'purple',
  ];

  currentColor = 'red'

  ngOnInit(): void {
    this.timer = setInterval(() => this.changeColor(), 1000);
  }

  changeColor() {
    {
      const randomColorIndex = Math.floor(this.background.length * Math.random());
      this.currentColor = this.background[randomColorIndex];
      this.timerColorChange.emit(this.currentColor);
    }
  }

  stopChangingColor() {
    clearInterval(this.timer);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
