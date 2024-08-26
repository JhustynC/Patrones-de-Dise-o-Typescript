import { createReadStream } from "fs";

const readableStream = createReadStream("archivo.xls", { encoding: "utf8" });

readableStream.on("data", (chunk) => {
  console.log(chunk);
  console.log("Largo de la lectura:", chunk.length);
});

readableStream.on("open", () => {
  console.log("Its file open");
});

readableStream.on("ready", () => {
  console.log("Listo");
});

readableStream.on("end", () => {
  console.log("Lectura completa.");
});

readableStream.on("error", (err) => {
  console.error("Error durante la lectura:", err);
});
