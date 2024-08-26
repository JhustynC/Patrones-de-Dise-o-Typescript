import * as fs from "fs";

export interface IPerson {
  name: string;
  lastname: string;
  birthdate: string;
}

export class Person implements IPerson {
  name: string;
  lastname: string;
  birthdate: string;

  constructor(name: string, lastname: string, birthdate: string) {
    this.name = name;
    this.lastname = lastname;
    this.birthdate = birthdate;
  }

  public getInformation(): string {
    return `
    Nombre: ${this.name} 
    Apellido: ${this.lastname} 
    Fecha de Nacimiento: ${this.birthdate}
    `;
  }
}

export interface IInputFile {
  readFile(filePath: string): Person[] | null;
}

export class FileAdapterSingleton implements IInputFile {
  private static instance: FileAdapterSingleton;
  private inputFile!: IInputFile;
  private constructor() {}

  public toggleInputFile(inputFile: IInputFile): void {
    this.inputFile = inputFile;
  }

  public readFile(path: string): Person[] | null {
    try {
      const data = this.inputFile.readFile(path);
      return data;
    } catch (err) {
      console.log(`Error: ${err}`);
      return null;
    }
  }

  public static getInstace(): FileAdapterSingleton {
    if (!this.instance) {
      this.instance = new FileAdapterSingleton();
    }
    return this.instance;
  }
}

export class TxtPersonReaderAdapterSingleton implements IInputFile {
  private static instance: TxtPersonReaderAdapterSingleton;
  private constructor() {}

  public static getInstance(): TxtPersonReaderAdapterSingleton {
    if (!this.instance) {
      this.instance = new TxtPersonReaderAdapterSingleton();
    }
    return this.instance;
  }

  readFile(filePath: string): Person[] {
    const data = fs.readFileSync(filePath, "utf8");
    return data.split("\n").map((line) => {
      const [name, lastName, birthDate] = line.split(",");
      return new Person(
        name.trim(),
        lastName.trim(),
        new Date(birthDate.trim()).toDateString()
      );
    });
  }
}

export class CsvPersonReaderAdapter implements IInputFile {
  private static instance: CsvPersonReaderAdapter;
  private constructor() {}

  public static getInstance(): CsvPersonReaderAdapter {
    if (!this.instance) {
      this.instance = new CsvPersonReaderAdapter();
    }
    return this.instance;
  }

  readFile(filePath: string): Person[] {
    const persons: Person[] = [];

    const data = fs.readFileSync(filePath, "utf8");
    const rows = data.split("\n");
    for (const row of rows) {
      const [name, lastName, birthDate] = row.split(",");
      persons.push(
        new Person(
          name.trim(),
          lastName.trim(),
          new Date(birthDate.trim()).toDateString()
        )
      );
    }
    return persons;
  }
}

export class JsonPersonReaderAdapter implements IInputFile {
  
  private static instance: JsonPersonReaderAdapter;
  private constructor() {}
  public static getInstance(): JsonPersonReaderAdapter {
    if (!this.instance) {
      this.instance = new JsonPersonReaderAdapter();
    }
    return this.instance;
  }

  readFile(filePath: string): Person[] {
    const data = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData.map(
      (person: any) =>
        new Person(
          person.name,
          person.lastName,
          new Date(person.birthDate).toDateString()
        )
    );
  }
}

//Se puede utilizar el pratron factory para escoger el tipo de adaper que necesitamos

const jsonPathFile = "data.csv";
const fileAdapter = FileAdapterSingleton.getInstace();
fileAdapter.toggleInputFile(CsvPersonReaderAdapter.getInstance());
const persons = fileAdapter.readFile(jsonPathFile);
console.table(persons);
