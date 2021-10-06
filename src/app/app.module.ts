import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MusicalStyleComponent } from './components/musical-style/musical-style.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule}  from "@angular/common/http";
import { SurveyComponent } from './components/survey/survey.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SurveyResultsComponent } from './components/survey-results/survey-results.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from "@angular/material/icon";
import { GoogleChartsModule } from 'angular-google-charts';
import { MatDialogModule } from "@angular/material/dialog";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    MusicalStyleComponent,
    HomeComponent,
    SurveyComponent,
    SurveyResultsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    GoogleChartsModule,
    MatDialogModule,
    MatToolbarModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
