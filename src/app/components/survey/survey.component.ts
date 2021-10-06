import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MusicalStyleService} from "../../services/musical-style.service";
import {IMusicalStyle} from "../../shared/model/musical-style.model";
import {ISurvey} from "../../shared/model/survey.model";
import {SurveyService} from "../../services/survey.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  surveyFormGroup: FormGroup;
  musicalStyles: IMusicalStyle[];
  survey: ISurvey;

  constructor(private fb: FormBuilder, private musicalStyleService: MusicalStyleService,
              private surveyService: SurveyService, private _snackBar: MatSnackBar,
              private router: Router) {
    this.surveyFormGroup = fb.group({
      email: ['', [Validators.required, Validators.email]],
      musicalStylesSelected: [null, Validators.required],
    });
    this.musicalStyles = [];
    this.survey = {};
  }

  ngOnInit(): void {
    this.findAllMusicalStyles();
  }

  findAllMusicalStyles() {
    this.musicalStyleService.get().toPromise().then(
      (result) => {
        this.musicalStyles = result as IMusicalStyle[];
        if(this.musicalStyles.length === 0) {
          this._snackBar.open('Primero debe cargar los estilos musicales.', 'OK', {duration: 6000}).afterDismissed().toPromise().then(
            () => this.router.navigate(['/musical-style'])
          );
        }
      }
    ).catch(
      (response) => {
        this._snackBar.open(`Ha ocurrido un error! ${response.message}`);
      }
    )
  }

  createSurvey(){
    this.survey.email = this.surveyFormGroup.get('email')?.value;
    this.survey.musicalStyles = this.surveyFormGroup.get('musicalStylesSelected')?.value;
    this.surveyService.create(this.survey).toPromise().then(
      (result) => {
        this._snackBar.open("Se ha creado con éxito la encuesta!", 'Aceptar');
        this.surveyFormGroup = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          musicalStylesSelected: [null, Validators.required],
        });
      }
    ).catch(
      (response) => {
        this._snackBar.open(`Ha ocurrido un error! ${response.message}`);
      }
    )
  }

  back() {
    window.history.back();
  }

}
