import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SurveyService} from "../../services/survey.service";
import {ISurvey} from "../../shared/model/survey.model";
import {ChartType} from "angular-google-charts";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.css']
})
export class SurveyResultsComponent implements OnInit {

  surveyResults: ISurvey[];
  totalByMusicalStyles: Array<any> = [];
  displayedColumns: string[] = ['id', 'createDate', 'email', 'musicalStyles'];

  title = 'Porcentaje de personas segun estilo musical favorito';
  type = ChartType.PieChart;
  data = this.totalByMusicalStyles;
  columnNames = ['Estilo Musical', 'Valor'];
  options = {};

  @ViewChild('dialogChart', {static: true}) dialogChart: TemplateRef<any>;

  constructor(private surveyService: SurveyService, private dialog: MatDialog) {
    this.surveyResults = [];
  }

  ngOnInit(): void {
    this.findAllSurveys();
  }

  findAllSurveys(){
    this.surveyService.get().toPromise().then(
      (result) => {
        this.surveyResults = result as ISurvey[];
        console.log(this.surveyResults);
      }
    ).catch(
      (response) => {
        alert(`Ha ocurrido un error! ${response.message}`);
      }
    )

    this.surveyService.getTotalByMusicalStyles().toPromise().then(
      (result) => {
        const results = result as [];
        for (const property in results) {
          this.totalByMusicalStyles.push([property, results[property]]);
        }
        console.log(this.totalByMusicalStyles);
      }
    )
  }

  showDialog() {
    this.dialog.open(this.dialogChart, {disableClose: true});
  }

  back() {
    window.history.back();
  }

}
