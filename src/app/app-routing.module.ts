import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { LoginComponent } from './components/login/login.component';
 import { HomeComponent } from './components/home/home.component';
 import { RegisterComponent } from './components/register/register.component';
 import { loggedGuard } from './guards/logged.guard';

const routes: Routes = [
   {path:'', component: HomeComponent, canActivate:[loggedGuard]},
   {path:'login', component: LoginComponent},
   {path:'signin', component: RegisterComponent},
   {path:'**', component: LoginComponent },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
