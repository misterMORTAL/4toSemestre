import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OuthRoutingModule } from './outh-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    OuthRoutingModule
  ]
})
export class OuthModule { }
