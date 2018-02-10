class Animal {
  constructor(name = 'unname', age = 0) {
    this.name = name
    this.age = age
  }

  say() {
    console.log(this.name, ' ', this.age)
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age)
  }

  say() {
    console.log('这是子类的 say 方法')
  }
}

const cat = new Cat('cat', 3)
cat.say()
