import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from  '@angular/material/card';
import { MatInputModule } from  '@angular/material/input';
import { MatButtonModule } from  '@angular/material/button';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class LoginModule { }
