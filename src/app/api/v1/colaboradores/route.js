import { NextResponse } from "next/server";
import sequelize from "@/libs/db";
import Colaborador from "./Colaborador.model";

export async function GET() {
  try {
    const result = await Colaborador.findAll();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
}
