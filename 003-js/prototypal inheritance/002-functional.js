const wolf = {
  howl: function () { console.log(this.name + ': awoooooooo') }
}

const dog = Object.create(wolf, {
  woof: { value: function() { console.log(this.name + ': woof') } }
})

function createDog (name) {
  return Object.create(dog, {
    name: {value: name + ' the dog'}
  })
}

const rufus = createDog('Rufus')

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"

console.log(Object.getPrototypeOf(rufus) === dog) //true
console.log(Object.getPrototypeOf(dog) === wolf) //true

// Check if rufus has a howl property; it does not
// Check if the prototype of rufus (which is dog) has a howl property; it does not
// Check if the prototype of dog (which is wolf) has a howl property; it does
// Execute the howl function setting this to rufus, so this.name will be "Rufus the dog".
