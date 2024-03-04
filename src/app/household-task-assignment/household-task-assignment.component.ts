import { HouseholdTasksService } from './../services/household-tasks.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HouseholdTask } from '../shared/model/household-task';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-household-task-assignment',
  standalone: true,
  imports: [
    CommonModule, MatFormFieldModule, MatSelectModule, FormsModule,
    MatButtonModule
  ],
  templateUrl: './household-task-assignment.component.html',
  styleUrl: './household-task-assignment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdTaskAssignmentComponent implements OnInit { 
  allTasks : HouseholdTask[] = [];
  selectedTask? : HouseholdTask;

  constructor(
    private householdTasksService : HouseholdTasksService){}

  ngOnInit(): void {
    this.allTasks = this.householdTasksService.list()
  }
}
