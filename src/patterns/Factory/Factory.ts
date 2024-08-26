//Interfaz que deben de cumplir todas la clases qque se creen para realiazar
//la misma tarea
export interface IVehiculoEntrega {
  deliver(): void;
}

//Una implementacion de esa clase
export class Camion implements IVehiculoEntrega {
  deliver(): void {
    console.log("Entrega mediante caminon");
  }
}
export class Barco implements IVehiculoEntrega {
  deliver(): void {
    console.log("Entrega mediante barco");
  }
}

//Esta es la interfaz que tienen que sefuir todas la fabricas de la instacias
//En este caso hay diferentes opciones para crea entonces con la interfaz nos
//aseguramos que siempre cumplan con el objetivo
export interface IDelivaryFactory {
  crearVehiculoDeEntrega(tipoVehiculo?: string): IVehiculoEntrega;
}

//Fabrica segun una opcion
export class DelivaryFactory implements IDelivaryFactory {
  private vehicleMap: Map<string, IVehiculoEntrega> = new Map<
    string,
    IVehiculoEntrega
  >([
    ["camion", new Camion()],
    ["barco", new Barco()],
  ]);

  crearVehiculoDeEntrega(tipoVehiculo: string): IVehiculoEntrega {
    const factoryMethod = this.vehicleMap.get(tipoVehiculo);
    if (factoryMethod) return factoryMethod;
    throw new Error(`Tipo de vehiculo invalido ${tipoVehiculo}`);
  }
}

//Tambine se pueden crear clases que creen un solo tipo de obejto
export class TruckFactory implements IDelivaryFactory {
  crearVehiculoDeEntrega(tipoVehiculo?: string): IVehiculoEntrega {
    return new Camion();
  }
}

//Uso del patron
//Tenemos un funcion que toma como parametros una fabrica y un tipo en este caso
//Pero tambien podemos crear fabricas de un solo tipo de objeto (Esta practica es
// mas comun)
function entraga(factory: IDelivaryFactory, typoDeVehiculo?: string): void {
  const entrega = factory.crearVehiculoDeEntrega(typoDeVehiculo);
  entrega.deliver();
}

//Fabrica de vehiculos para poder escoger el tipo
const fabricaDeVehiculo: IDelivaryFactory = new DelivaryFactory();

//Tipos de vehiculo a escoger
const tipoVehiculo: string = "barco";

//Fabrica solo de camiones
const fabricaDeCamiones = new TruckFactory();

entraga(fabricaDeCamiones, tipoVehiculo);