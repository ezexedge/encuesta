import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { gender, levelEducation } from 'src/common/interfaces/survey.interface';

export class SurveyDTO {
  @ApiProperty()
  @IsNotEmpty()
  gender: gender;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  ageRange: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  country: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  levelEducation: levelEducation;
  @ApiProperty()
  @IsString()
  areaIt: string;
  @ApiProperty()
  @IsString()
  academy: string;
  @ApiProperty()
  @IsString()
  salary: string;
  @ApiProperty()
  @IsString()
  question: string;
}
