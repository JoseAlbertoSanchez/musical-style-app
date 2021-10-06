import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToMusicalStyles() {
    this.router.navigate(['/musical-style']);
  }

  goToSurvey() {
    this.router.navigate(['/survey']);
  }

  goToSurveyResults() {
    this.router.navigate(['/survey-results']);
  }

}
