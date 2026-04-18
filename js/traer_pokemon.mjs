import { readFile, writeFile } from "node:fs/promises";
const url = "https://pokeapi.co/api/v2/pokemon"
const nombre_o_id = process.argv[2]
const consulta = `${url}/${nombre_o_id}`
console.log("¿A dónde pregunto?", consulta);
try {
    const solicitud = await fetch(consulta)
    const datos = await solicitud.json()
    console.log("qué hay aquí?", datos);
    const guardar = {
        "nombre": datos.name,
        "imagen": datos.sprites.front_default
    }
    await writeFile("C:\\xampp\\htdocs\\clase26\\pokemon.json", JSON.stringify(guardar), 'utf-8')
    const lectura = await  readFile("C:\\xampp\\htdocs\\clase26\\pokemon.json", "utf-8")
    console.log("Hey, qué hay en el archivo? [lectura]", lectura);
} catch (error) {
    console.error("Tenemos un error", error.message);
    
}