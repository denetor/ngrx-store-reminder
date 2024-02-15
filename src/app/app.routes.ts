import { Routes } from '@angular/router';
import { environment } from "../environments/environment";
import { HomeComponent } from "./features/home/home.component";
import { LoginComponent } from "./features/auth/login/login.component";
import {NotFoundComponent} from "./features/error/notfound/notfound.component";
import {UsersIndexComponent} from "./features/users/index/users-index.component";
import {TeamsIndexComponent} from "./features/teams/index/teams-index.component";
import {RolesIndexComponent} from "./features/roles/index/roles-index.component";
import {UsersDetailComponent} from "./features/users/detail/users-detail.component";
import {TeamsDetailComponent} from "./features/teams/detail/teams-detail.component";


export const routes: Routes = [
    { path: '', component: HomeComponent, title: environment.appTitle, pathMatch: 'full' },
    { path: 'auth/login', component: LoginComponent, title: `${environment.appTitle} - Login`, pathMatch: 'full' },
    { path: 'roles', component: RolesIndexComponent, title: `${environment.appTitle} - Ruoli`, pathMatch: 'full' },
    { path: 'teams', component: TeamsIndexComponent, title: `${environment.appTitle} - Team`, pathMatch: 'full' },
    { path: 'teams/:id', component: TeamsDetailComponent, title: `${environment.appTitle} - Dettaglio team`, pathMatch: 'full' },
    { path: 'users', component: UsersIndexComponent, title: `${environment.appTitle} - Utenti`, pathMatch: 'full' },
    { path: 'users/:id', component: UsersDetailComponent, title: `${environment.appTitle} - Dettaglio utente`, pathMatch: 'full' },
    { path: '**', component: NotFoundComponent, title: `${environment.appTitle} - Ooops` }
];
