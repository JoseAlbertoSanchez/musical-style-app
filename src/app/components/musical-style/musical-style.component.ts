import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MusicalStyleService} from "../../services/musical-style.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-musical-style',
  templateUrl: './musical-style.component.html',
  styleUrls: ['./musical-style.component.css']
})
export class MusicalStyleComponent implements OnInit {

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private musicalStyleService: MusicalStyleService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  create(){
    this.musicalStyleService.create(this.nameFormControl.value).toPromise().then(
      (result) => {
        this._snackBar.open("Se ha creado con éxito el estilo musical", 'Aceptar');
        this.nameFormControl = new FormControl('', [
          Validators.required
        ]);
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
