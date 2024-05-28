import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { Person } from '../shared/model/person';
import { MatButtonModule } from '@angular/material/button';
import { PersonCardComponent } from '../person-card/person-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-random-team-progress',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule, PersonCardComponent,
    MatProgressBarModule, MatIconModule
  ],
  templateUrl: './random-team-progress.component.html',
  styleUrl: './random-team-progress.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomTeamProgressComponent implements OnInit{ 
  allPersons : Person[] = [];
  randomTeam : Person[] = [];
  personIndex = 0;

  constructor(private personService : PersonsService){}

  ngOnInit(): void {
    this.personService
      .list()
      .then((result: Person[]) => (this.allPersons = result));
  } 

  generateRandomTeam() {
    const shuffledPersons = 
      [...this.allPersons].sort(() => Math.random() - 0.5);

    this.randomTeam = shuffledPersons.splice(0,5);
  }

  nextPerson() {
    ++this.personIndex;
  }
}
