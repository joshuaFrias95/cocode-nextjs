import { NextRequest, NextResponse } from "next/server";
import Proyecto from "./Proyecto.model";
import Dificultad from "../dificultad/dificultad.model";

export async function GET() {
  //!! no he logrado saber como usar los controladores aquí entonces estoy haciendo la logica directamente.

  //el metodo findAll devuelve todos los proyectos en la DB, puedes encontrar más info de los distintos metodos aqui: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/  la parte de limites y paginacion nos podría servir un resto.
  const results = await Proyecto.findAll({include: [Dificultad]}); //este include está generando un error, en la relacion en el modelo doy más detalles de ello.
  return NextResponse.json(results);
}

export async function POST(request) {
  // aquí tomo el request por default de next en las solicitudes POST y lo paso a json.
  const req = await request.json();

  try {
    // como ya definimos el modelo, este se vuelve una clase con el metodo create que añade a la DB la data que se le pase.
    const result = await Proyecto.create(req);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.error("Error al procesar la solicitud POST: ", error);
  }
}

// Docu util

// las asociaciones las vamos a usar un chingo preo creo que algunas ya están directametne en las tablas, si no, podemos echarle un vistazo a esto https://sequelize.org/docs/v6/core-concepts/assocs/ .  Segun veo las asociaciones las podemos definir  en el modelo que los relacion. por ejemplo para una relacion 1 a muchos,  A.hasMany(B) y B.belongsTo(A) no estoy seguro aún pero puede funcionar. 

// https://sequelize.org/docs/v6/core-concepts/model-querying-finders/  el metodo findOrCreate se me hizo interesante, quizá se pueda usar en algunos contextos? 

// creo que en java es extendido el uso de getters y setters por la POO, quiza esto te pueda servir https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals/   en lo personal no se muy bien que hacen estos aquí pero creo que se pueden usar para transformar datos cuando se leen o escriben en la db???
