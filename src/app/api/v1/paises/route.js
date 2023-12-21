import { NextResponse } from "next/server";
import sequelize from "@/libs/db";
import Pais from "./Pais.model";

export async function GET() {
  try {
    const result = await Pais.findAll();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
}
