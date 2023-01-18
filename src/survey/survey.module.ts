import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SURVEY } from 'src/common/models/models';
import { SurveySchema } from './schema/survey.schema';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: SURVEY.name,
        useFactory: () => {
          return SurveySchema;
        },
      },
    ]),
  ],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
