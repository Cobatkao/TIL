class HumanClass {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayName() {
    console.log('Your name is ' + this.name)
  }
  sendInfo() {
    console.log('Hello ' + this.name + ', you are ' + this.age + ' years old.' )
  }
}

let person = new HumanClass('高航', 25)
person.sayName() //  Your name is 高航
person.sendInfo() // Hello 高航, you are 25 years old.·
console.log(person instanceof HumanClass) // true
console.log(person instanceof Object) // true

const makeRequest = () => {
  return getJSON()
    .then(data => {
      if (data.needsAnotherRequest) {
        return makeAnotherRequest(data)
          .then(moreData => {
            console.log(moreData)
            return moreData
          })
      } else {
        console.log(data)
        return data
      }
    })
}