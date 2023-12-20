import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json("Obteniendo proyecto:")
}

export function DELETE() {
  return NextResponse.json("Proyecto eliminado")
}

export function PUT() {
  return NextResponse.json("Proyecto actualizado")
}

