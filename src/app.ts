// import { existsSync } from "fs";

import { DataService } from "./patterns/Repository/app";
import { ApiRepositoryImp } from "./patterns/Repository/Data/ApiRepositoryImp";

// import {
//   CsvPersonReaderAdapter,
//   FileAdapterSingleton,
//   IInputFile,
//   Person,
//   TxtPersonReaderAdapter,
// } from "./patterns/Adapter/Adapter2";

// const csvPsthFile: string =
//   "C:/Users/usuario/Desktop/Typescript/Patrones-de-Diseño/src/data/data.csv";

// if (existsSync(csvPsthFile)) {
//   console.log("Existe el path\n");
// } else {
//   console.log("No existe el path\n");
// }

// const fileAdapter: FileAdapterSingleton = FileAdapterSingleton.getInstace();
// fileAdapter.toggleInputFile(CsvPersonReaderAdapter.getInstance());
// const persons: Person[] | null = fileAdapter.readFile(csvPsthFile);
// console.log(persons ?? "Persons not found");

async function main(): Promise<void> {
  const dataService = new DataService(new ApiRepositoryImp());
  const users = await dataService.getAllUsers();
  console.log(users ?? "Users not found");
}

(async () => {
  await main();
})();
