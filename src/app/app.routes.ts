import { Routes } from '@angular/router';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { HouseholdTaskAssignmentComponent } from './household-task-assignment/household-task-assignment.component';
import { RandomTeamSelectionComponent } from './random-team/random-team-selection/random-team-selection.component';

export const routes: Routes = [
    {path: '', component: PersonsListComponent},
    {path: 'person/:id', component : PersonFormComponent},
    {path: 'newperson', component : PersonFormComponent},
    {path: 'team', component : TeamViewComponent},
    {path: 'household-assignment', component: HouseholdTaskAssignmentComponent},
    {path: 'random-team', component: RandomTeamSelectionComponent}
];
