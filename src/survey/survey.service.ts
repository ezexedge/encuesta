import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISurvey } from 'src/common/interfaces/survey.interface';
import { SURVEY } from 'src/common/models/models';
import { SurveyDTO } from './dto/survey.dto';

@Injectable()
export class SurveyService {
  constructor(
    @InjectModel(SURVEY.name) private readonly model: Model<ISurvey>,
  ) {}

  async create(surveyDTO: SurveyDTO): Promise<ISurvey> {
    const newSurvey = await this.model.create(surveyDTO);
    return await newSurvey.save();
  }
  async getAll(): Promise<ISurvey[]> {
    const survey = await this.model.find();
    return await survey;
  }
}
