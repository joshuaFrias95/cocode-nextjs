import { NextResponse } from 'next/server'
import sequelize from '@/libs/db'

export async function GET() {
  const result = await sequelize.query('SELECT NOW()')
  console.log(result)
  return NextResponse.json({ message: result })
}

export function POST() {
  return NextResponse.json("Creando usuario")
}
