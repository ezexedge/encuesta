import { Body, Controller, Post } from '@nestjs/common';
import { SurveyDTO } from './dto/survey.dto';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private surveyService: SurveyService) {
    this.surveyService = surveyService;
  }

  @Post()
  create(@Body() surveyDTO: SurveyDTO) {
    return this.surveyService.create(surveyDTO);
  }
}
