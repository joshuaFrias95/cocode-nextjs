import { NextResponse } from "next/server";
import sequelize from "@/libs/db";
import Tecnologia from "./Tecnologia.model";

export async function GET() {
  try {
    const result = await Tecnologia.findAll();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error)
  }
}