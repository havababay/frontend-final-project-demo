import { Routes } from '@angular/router';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonCardListComponent } from './person-card-list/person-card-list.component';

export const routes: Routes = [
    {path: '', component: PersonsListComponent},
    {path: 'person/:id', component : PersonFormComponent},
    {path: 'newperson', component : PersonFormComponent},
    {path: 'team', component : PersonCardListComponent},
];
