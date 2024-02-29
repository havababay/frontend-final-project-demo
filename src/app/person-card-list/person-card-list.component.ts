import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { Person } from '../shared/model/person';

@Component({
  selector: 'app-person-card-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './person-card-list.component.html',
  styleUrl: './person-card-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonCardListComponent implements OnInit { 
  allPersons : Person[] = [];

  constructor(private personService : PersonsService) {}

  ngOnInit(): void {
    this.allPersons = this.personService.list();
  }
}
