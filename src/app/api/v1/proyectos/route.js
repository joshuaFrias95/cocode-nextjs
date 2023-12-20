import { NextResponse } from 'next/server'
import Proyecto from './Proyecto.model'

export async function GET() {
  const proyecto = await Proyecto.findAll()
  return NextResponse.json({proyecto: proyecto})
}

export function POST() {
  return NextResponse.json("Creando proyecto")
}
