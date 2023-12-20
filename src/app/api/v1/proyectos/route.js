import { NextResponse } from 'next/server'


export function GET() {
  return NextResponse.json("Lista de proyectos")
}

export function POST() {
  return NextResponse.json("Creando proyecto")
}
