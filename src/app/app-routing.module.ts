import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot([
    { path: 'Login', component: LoginComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
