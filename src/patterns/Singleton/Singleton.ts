//Patron de diseño Creacional
//En toda la aplicación se tendra un SOLO objeto para tener accseso a el
//Ejemplo un solo objeto para la coneccion a base de datos

//Reglas para la implementacion
//1) Debemos tener un constructor privado/ We need to have an empty constructor
//2) Debemos tener uun atributo privado/ We need to have to a static private attribute
//3) debemos tener un metodo estatico que devuelve la instancia/ We need to have a publiv static method wich return the instance

export class DataBaseConnector {
  private static dataBaseConnector: DataBaseConnector;
  public objectName: string = "dataBaseConnector";
  private constructor() {}

  public static getInstance(): DataBaseConnector {
    if (!DataBaseConnector.dataBaseConnector) {
      DataBaseConnector.dataBaseConnector = new DataBaseConnector();
    }
    return DataBaseConnector.dataBaseConnector;
  }

  public changeInstaceName(name: string): void {
    this.objectName = name;
  } 
}

const dbc = DataBaseConnector.getInstance();
console.log(dbc);

dbc.changeInstaceName("Soy un singleton");
console.log(dbc);

const dbc2 = DataBaseConnector.getInstance();
console.log(dbc2);

const dbc3 = DataBaseConnector.getInstance();
console.log(dbc3);
