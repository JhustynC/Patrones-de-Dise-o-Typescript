/**
Adapter Pattern (Estructural)

Patron estructural que permite la colaboracion entre objetos con interfaces
incompatibles

CASOS DE USO:
- Los adaptadores se utilizan cuando un objeto de una clase incompatible se necesita utilizar 
con un objeto de una clase que espera un comportamiento similar.
 - Se utiliza cuando una clase adapta un objeto de una interfaz existente para que pueda ser 
utilizada en otra clase.
 - Se utiliza cuando una clase que desea utilizar un objeto de otra clase debe adaptar su 
interfaz para que coincida con el de la clase que utiliza el objeto.
 - Se utiliza cuando se desea mantener la coherencia del diseño al reemplazar una clase con una 
clase que no es compatible.

*/

// Clase que desea utilizar el adaptador
interface IOldJoyStick {
  connectToPort(): boolean;
  readInputs(): number;
}

// Clase que implementa la interfaz deseada
class OldJoyStickImp implements IOldJoyStick {
  public connectToPort(): boolean {
    console.log("Coneccting to port");
    return true;
  }

  public readInputs(): number {
    console.log("Reading the old joy stick inputs");
    return Math.floor(Math.random() * 100);
  }
}

// Clase que implementa la interfaz del adaptador
interface IUSBJoyStick {
  connectToUSB(): void;
  readData(): number;
}

// Clase que implementa el adaptador
class USBJoyStickImp implements IUSBJoyStick {
  public connectToUSB(): void {
    console.log("Connecting to USB.");
  }
  public readData(): number {
    console.log("Reading from USB");
    return Math.floor(Math.random() * 256);
  }
}

// Clase que utiliza el adaptador
class JoyStickAdapter implements IUSBJoyStick {
  constructor(private oldJoyStick: OldJoyStickImp) {}

  connectToUSB(): void {
    this.oldJoyStick.connectToPort();
  }
  readData(): number {
    return this.oldJoyStick.readInputs();
  }
}

// Prueba del adaptador
const oldJoyStick = new OldJoyStickImp();
const oldJoyStickWithAdapter = new JoyStickAdapter(oldJoyStick);
oldJoyStickWithAdapter.connectToUSB();






