import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DialogComponentDialog } from './dialog/dialog.component';

import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { MatTableModule } from  '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from  '@angular/material/card';
import { MatInputModule } from  '@angular/material/input';
import { MatButtonModule } from  '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    // DialogComponentDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,

    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
      MatDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
