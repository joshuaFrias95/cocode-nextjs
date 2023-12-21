import { NextResponse } from "next/server";
import sequelize from "@/libs/db";
import Tarea from "./Tarea.model";
import Colaborador from "../colaboradores/Colaborador.model";
import Proyecto from "../proyectos/Proyecto.model";

export async function GET() {

  try {
    const result = await Tarea.findAll();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error)
  }
}
