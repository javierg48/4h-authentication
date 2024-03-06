// ./src/app/models/section1.js
import mongoose, { Schema } from "mongoose";

const section1Schema = new Schema({
  year: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  nameOfClub: {
    type: String,
    required: true,
  },
  numInClub: {
    type: Number,
    required: true,
  },
  clubLeader: {
    type: String,
    required: true,
  },
  meetingsHeld: {
    type: Number,
    required: true,
  },
  meetingsAttended: {
    type: Number,
    required: true,
  },
});

const Section1 =
  mongoose.models.Section1 || mongoose.model("Section1", section1Schema, "section1");

export default Section1;