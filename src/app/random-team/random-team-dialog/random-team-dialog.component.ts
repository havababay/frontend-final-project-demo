import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-random-team-dialog',
  standalone: true,
  imports: [
    CommonModule, MatDialogModule, MatButtonModule
  ],
  templateUrl: './random-team-dialog.component.html',
  styleUrl: './random-team-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomTeamDialogComponent { 
  constructor(
    @Inject(MAT_DIALOG_DATA) public randomTeams: string[]
  ){}
}
