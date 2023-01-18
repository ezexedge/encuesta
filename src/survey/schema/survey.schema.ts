import * as mongoose from 'mongoose';

export const SurveySchema = new mongoose.Schema({
  gender: { type: String },
  ageRange: { type: String },
  country: { type: String },
  city: { type: String },
  levelEducation: { type: String },
  areaIt: { type: String },
  academy: { type: String },
  salary: { type: String },
  question: { type: String },
  creationDate: { type: Date, default: Date.now },
});
