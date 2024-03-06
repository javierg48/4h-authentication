// ./src/app/api/section1/route.js

import connectDB from "@/app/lib/mongodb.js";
import Section1 from "@/app/models/section1";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { year, grade, nameOfClub, numInClub, clubLeader, meetingsHeld, meetingsAttended } = await req.json();

  try {
    await connectDB();
    await Section1.create({ year, grade, nameOfClub, numInClub, clubLeader, meetingsHeld, meetingsAttended });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}