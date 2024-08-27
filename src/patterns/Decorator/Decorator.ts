// interface Component {
//   render(): string;
// }

// class HeaderComponent implements Component {
//   public render(): string {
//     return `<header>Header Component</header>`;
//   }
// }

// class Decorator implements Component {
//   //Con sugar sintax
//   constructor(protected component: Component) {}

//   public render(): string {
//     return this.component.render();
//   }
// }

// class ComponentDecorator extends Decorator {
//   public render(): string {
//     return `<div style="background-color: yellow;">${super.render()}</div>`;
//   }
// }

// const component = new HeaderComponent();
// const decorator = new ComponentDecorator(component);

// console.log(decorator.render());

interface ICoffe {
  description(): string;
  price(): number;
}

class SimpleCoffee implements ICoffe {
  description(): string {
    return "Cafe";
  }
  price(): number {
    return 2.0;
  }
}

abstract class CoffeeDecorator implements ICoffe {
  constructor(protected coffee: ICoffe) {}
  price(): number {
    return this.coffee.price();
  }
  description(): string {
    return this.coffee.description();
  }
}

class Milk extends CoffeeDecorator {
  constructor(protected coffee: ICoffe) {
    super(coffee);
  }

  description(): string {
    return `${this.coffee.description()}, con leche`;
  }
  price(): number {
    return this.coffee.price() + 0.5;
  }
}

class Sugar extends CoffeeDecorator {
  constructor(protected coffee: ICoffe) {
    super(coffee);
  }
  description(): string {
    return `${this.coffee.description()}, con azúcar`;
  }
  price(): number {
    return this.coffee.price() + 0.25;
  }
}

let coffe: ICoffe = new SimpleCoffee();
console.log(coffe.description(), coffe.price()); 
//Salida: Cafe 2
coffe = new Milk(coffe);
console.log(coffe.description(), coffe.price());
//Salida: Cafe, con leche 2.5 
coffe = new Sugar(coffe);
console.log(coffe.description(), coffe.price());
//Salida: Cafe, con leche, con azúcar 2.75
