import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'users', component: UsersListComponent, canActivate: [AuthGuard] },
      { path: 'users/:id', component: UsersListComponent },
      { path: 'messages', component: MessagesComponent },
    ]
  },  
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
