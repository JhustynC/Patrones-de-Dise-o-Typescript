//Es la interfaz en comun que se implementara en todas la clases necesarias
export interface IAnimal {
  name: string;
  sonido: () => string;
}

//Una implementacion de Animal con su propio sonido
export class Perro implements IAnimal {
  name: string = "perro";
  sonido() {
    return "guauff";
  }
}

export class Gato implements IAnimal {
  name: string = "gato";
  sonido() {
    return "miauu";
  }
}

//Aqui estaria la implementacion del codigo, manejos la redundancia
//y la repeticion de codigo ademas con la interfaz aseguramos de que
//aunque se cree cualquier otro animal mantemos la misma funcionalidad
const perro = new Perro();
const gato = new Gato();

//Cumple con el princio de Abierto para la extencion cerrado para la modificacion
function HacerSonido(animal: IAnimal) {
  animal.sonido();
}

HacerSonido(perro);
HacerSonido(gato);
