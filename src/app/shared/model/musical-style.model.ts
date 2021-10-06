export interface IMusicalStyle {
  id?: number;
  name?: string;
}

export class MusicalStyle implements IMusicalStyle {
  constructor(public id?: number, public name?: string) {}
}
