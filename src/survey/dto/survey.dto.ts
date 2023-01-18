import { IsNotEmpty, IsString } from 'class-validator';
import { gender, levelEducation } from 'src/common/interfaces/survey.interface';

export class SurveyDTO {
  @IsNotEmpty()
  gender: gender;
  @IsNotEmpty()
  @IsString()
  ageRange: string;
  @IsNotEmpty()
  @IsString()
  country: string;
  @IsNotEmpty()
  @IsString()
  city: string;
  @IsNotEmpty()
  @IsString()
  levelEducation: levelEducation;
  @IsString()
  areaIt: string;
  @IsString()
  academy: string;
  @IsString()
  salary: string;
  @IsString()
  question: string;
}
