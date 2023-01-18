export interface ISurvey extends Document {
  gender: gender;
  ageRange: string;
  country: string;
  city: string;
  levelEducation: levelEducation;
  areaIt: string;
  academy: string;
  salary: string;
  question: string;
  creationDate: Date;
}

export enum gender {
  MAN = 'MAN',
  WOMAN = 'WOMAN',
  X = 'X',
}

export enum levelEducation {
  ITUNIVERSITY = 'IT UNIVERSITY',
  NOITUNIVERSITY = 'NOT IT UNIVERSITY',
  SECONDARY = 'SECONDARY',
  PRIMARY = 'PRIMARY',
}
