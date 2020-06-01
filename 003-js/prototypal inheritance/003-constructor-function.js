function Wolf(name) {
  this.name = name;
}

Wolf.prototype.howl = function() {
  console.log(this.name + ': awoooooooo');
};

function Dog(name) {
  Wolf.call(this, name + ' the dog');
}

function inherit(proto) {
  function ChainLink() {}

  ChainLink.prototype = proto;
  return new ChainLink();
}

Dog.prototype = inherit(Wolf.prototype);

Dog.prototype.woof = function() {
  console.log(this.name + ': woof');
};

const rufus = new Dog('Rufus');

rufus.woof(); // prints "Rufus the dog: woof"
rufus.howl(); // prints "Rufus the dog: awoooooooo"

console.log(Object.getPrototypeOf(rufus) === Dog.prototype); //true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype); //true

// the prototype of rufus is Dog.prototype
// the prototype of Dog.prototype is Wolf.prototype
// the prototype of Wolf.prototype is Object.prototype

// util.inherits
// Object.setPrototypeOf
