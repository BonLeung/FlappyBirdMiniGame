(function() {
  "use strict"

  // 函数声明
  // function Animal() {
  //
  // }

  var Animal = function(name, age) {
    this.name = name
    this.age = age
  }

  Animal.prototype.say = function() {
    console.log(this.name + ' ' + this.age)
  }

  // var cat = new Animal('cat', 3)
  // cat.say()

  // // call apply
  // var params = {
  //   name: 'cat2',
  //   age: 4
  // }
  // cat.say.call(params)

  var Cat = function(name, age) {
    // Animal.apply(this, arguments)
    Animal.apply(this, [name, age])
    // Animal.call(this, name, age)
  }
  Cat.prototype = Object.create(Animal.prototype)

  Cat.prototype.say = function() {
    var p = {
      name: '父类名字',
      age: 10
    }
    Animal.prototype.say.apply(p)
    console.log('子类的名字是' + this.name)
  }

  var cat1 = new Cat('cat1', 4)
  cat1.say()

})()
