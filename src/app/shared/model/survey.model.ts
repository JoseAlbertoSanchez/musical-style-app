import {IMusicalStyle} from "./musical-style.model";

export interface ISurvey {
  id?: number;
  email?: string;
  createDate ?: string;
  musicalStyles ?: IMusicalStyle[]
}

export class Survey implements ISurvey {
  constructor(public id?: number, public email?: string,
              public createDate?: string, public musicalStyles?: IMusicalStyle[]) {}
}
