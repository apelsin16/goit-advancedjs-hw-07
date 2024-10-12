class Key {

    private signature: number

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;
    constructor(key: Key) {
        this.key = new Key();
    }
    getKey(){
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];

    constructor(key: Key) {
        this.door = false;
        this.key = key;
        this.tenants = [];
    }

    comeIn(person: Person): void {
        if (this.door) {
          this.tenants.push(person);
          console.log(`${person.getKey().getSignature()} увійшов у будинок.`);
        } else {
          console.log('Двері зачинені, не можна увійти.');
        }
    }

    abstract openDoor(key: Key): void
}

class MyHouse extends House {
    constructor(key: Key) {
      super(key);
    }
  
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('Двері відчинені.');
      } else {
        console.log('Неправильний ключ, двері зачинені.');
      }
    }
  }
  

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};