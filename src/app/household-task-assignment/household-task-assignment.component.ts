import { HouseholdTasksService } from './../services/household-tasks.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HouseholdTask } from '../shared/model/household-task';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Person } from '../shared/model/person';
import { PersonsService } from '../services/persons.service';
import { PersonCardComponent } from '../person-card/person-card.component';

@Component({
  selector: 'app-household-task-assignment',
  standalone: true,
  imports: [
    CommonModule, MatFormFieldModule, MatSelectModule, FormsModule,
    MatButtonModule, PersonCardComponent
  ],
  templateUrl: './household-task-assignment.component.html',
  styleUrl: './household-task-assignment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdTaskAssignmentComponent implements OnInit { 
  allTasks : HouseholdTask[] = [];
  allPerons : Person[] = [];
  selectedTask? : HouseholdTask;
  randomTeam : Person[] = [];

  constructor(
    private householdTasksService : HouseholdTasksService,
    private personsService : PersonsService){}

  ngOnInit(): void {
    this.allTasks = this.householdTasksService.list();
    this.allPerons = this.personsService.list();
  }

  generateRandomTeam() {
    let shuffledPersons = 
      [...this.allPerons].sort(() => Math.random() - 0.5);

    this.randomTeam = shuffledPersons.splice(0,5);
  }
}
