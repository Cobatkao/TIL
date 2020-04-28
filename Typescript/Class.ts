class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  move(distance: number = 0): void {
    console.log(`${this.name} moved ${distance}m`)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distance: number = 45): void {
    console.log('Galloping')
    super.move(distance)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distance: number = 5): void {
    console.log(`slithering...`)
    super.move(distance)
  }
}

let sam = new Snake('Sammy')
let tom: Animal = new Horse('Tommy')

sam.move()
tom.move(34)