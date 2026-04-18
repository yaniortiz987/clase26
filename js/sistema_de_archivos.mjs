import { readFile, writeFile } from "node:fs/promises";

const datos = await 
    readFile("C:\\xampp\\htdocs\\clase26\\pokemon.json", "utf-8")

console.log("Hey, qué hay en el archivo?", datos);

