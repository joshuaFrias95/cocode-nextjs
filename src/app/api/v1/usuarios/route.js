import { NextResponse } from "next/server";
import sequelize from "@/libs/db";

export async function GET() {
  const result = await sequelize.query("SELECT NOW()");
  console.log(result);
  return NextResponse.json({ message: result });
}

export async function POST(request) {
  const req = await request.json();
  const { password } = req;

  console.log(password);

  //aquí podriamos  usar la librería bcrypt para encriptarlo o hacer la encriptacion manual.

  // ejemplo
  const encrypted = await bcrypt.hash(password, 10);
  // si se crea el modelo de usuario y se importa la librería bcrypt creooooooooooo que esto podría funcionar para añadir el usuario a la DB con el password encriptado.
  const result = await Usuario.create({ ...req, password: encrypted });  

  return NextResponse.json("Creando usuario");
}
