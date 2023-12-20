
import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json("Obteniendo usuario:")
}

export function DELETE() {
  return NextResponse.json("Usuario eliminado")
}

export function PUT() {
  return NextResponse.json("Usuario actualizado")
}

