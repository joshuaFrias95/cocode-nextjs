import { NextResponse } from 'next/server'
import sequelize from '@/libs/db'

export async function GET() {
  const result = await sequelize.query('SELECT NOW()')
  console.log(result)
  return NextResponse.json({ message: result[0]['NOW()'] })
}

export function POST() {
  return NextResponse.json("Creando usuario")
}
