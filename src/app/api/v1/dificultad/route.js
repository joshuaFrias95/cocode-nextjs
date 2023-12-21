import { NextResponse } from "next/server";
import sequelize from "@/libs/db";
import Dificultad from "./dificultad.model";

export async function GET() {
  try {
    const result = await Dificultad.findAll();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
}
