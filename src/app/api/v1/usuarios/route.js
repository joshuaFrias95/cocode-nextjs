import { NextResponse } from 'next/server'


export function GET() {
  return NextResponse.json("Lista de usuarios")
}

export function POST() {
  return NextResponse.json("Creando usuario")
}
