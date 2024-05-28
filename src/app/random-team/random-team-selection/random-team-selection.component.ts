import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { RandomTeamDialogComponent } from '../random-team-dialog/random-team-dialog.component';

@Component({
  selector: 'app-random-team-selection',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './random-team-selection.component.html',
  styleUrl: './random-team-selection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomTeamSelectionComponent {
  constructor(private dialogService: MatDialog) {}
  allTeams = ['Hen & Rivki',
              'Hen & Yuval',
            'Karin & Or & Kim',
             'Eliav, Noa, Omer',
            'Amit, Bar, Yarin'];

  openRandomTeamDialog() {
    const allTeamsCopy = [...this.allTeams];

    allTeamsCopy.sort(() => Math.random() - 0.5);

    this.dialogService.open(RandomTeamDialogComponent, { data: allTeamsCopy });
  }
}
