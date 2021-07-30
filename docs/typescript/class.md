---
title: 类
order: 5
toc: menu
nav:
  title: TypeScript
---

## 基本概念

- 类：定义了一件事物的抽象特点，包含它的属性和方法
- 面向对象三大特性：封装、继承、多态
- 存取器（getter & setter）：用以改变属性的读取和赋值行为
- 修饰符：修饰符是一些关键字，用于限定成员或类型的性质。比如`public`、`protected` 、`private`
- 抽象类(abstract)：抽象类是供其他类继承的基类，**抽象类不允许被实例化，抽象类中的抽象方法必须在子类中被实现，一个类只能继承自另一个类(extends)**
- 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口，**类可以继承(implements)多个接口**

## es6 中的类

```javascript
class Animal {
  public name;
  public age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static sayHello() {
    console.log('hello');
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age); // 调用父类的 constructor(name, age)
  }
}
```

## es7 中的类

- `es6`中实例的属性只能通过构造函数中的`this.name = xxx`来定义，`es7`中可以直接在类里面定义：

```javascript
class Animal {
  name = 'Rained';

  constructor() {
    /*...*/
  }
}

let a = new Animal();
console.log(a.name); // Rained
```

- `es6`属性不可以使用`static`描述，`es7`可以使用`static`定义一个静态属性：

```javascript
class Animal {
  static name = 'Rain';

  constructor() {
    /*...*/
  }
}

console.log(Animal.name); // Rain
```

## ts 中的类

### 基本使用

```javascript
class Animal {
  public name!: string; // !非空断言
  public age!: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  static sayHello() {
    console.log('hello');
  }
}
```

### 修饰符

- `public`谁都可以访问到
- `protected`自己和子类可以访问到，子类的实例无法访问

```javascript
class Animal {
  public name!: string;
  protected constructor(name: string) {
    this.name = name;
  }
}
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
}

// 错误 protected修饰构造函数修时，该类只允许被继承
let a = new Animal('Rain');
```

- `private`除了自己都访问不到，当构造函数修饰为`private`时，该类不允许被继承或实例化

```javascript
class Animal {
  public name!: string;
  private constructor(name: string) {
    this.name = name;
  }
}
// 错误 private修饰构造函数不允许被继承
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
}
// 错误 private修饰构造函数不允许被实例化
let a = new Animal('Rain');
```

- `readonly`只读修饰符

```javascript
class Animal {
  public readonly name!: string;
  constructor(name: string) {
    this.name = name;
  }

  updateName(name: string) {
    // 错误，name时只读属性，只能在constructor初始化
    this.name = name;
  }
}

```

### 静态属性和方法

```javascript
// 静态属性和方法是可以被子类继承
class Animal {
    static type = 'animal';
    static sayHello() {
        return 'hello';
    }
    private _name: string = 'Rain';

    get name() { // 属性访问器
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
}
let animal = new Animal();
console.log(animal.name);
```

**静态方法和普通方法中`super`代表的含义不同**

```javascript
class Animal {
  static type = 'animal';
  public name!: string;

  constructor(name: string) {
    this.name = name;
  }

  static sayHello() {
    return 'hello';
  }

  eat() {
    console.log('eat');
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name); // super ===> Animal.call(Cat, ...args)
  }

  static sayHello() {
    let res = super.sayHello(); // super ===> Animal

    return res + ' world';
  }

  eat() {
    // super指代父类的原型
    super.eat(); // super ===> Animal.prototype
  }
  // sleep相当于挂载到Cat.prototype上属性
  get sleep() {
    return 'sleep';
  }
}

let tom = new Cat('Tom');
console.log(tom.sleep); // sleep
```

## 抽象类

抽象类不可以被实例化

```javascript
  namespace d {
  abstract class Animal {
    abstract name: string;
  }

  class Dog extends Animal {
    name = 'rain';
  }
}
```

**最后补充一下：我们再 ts 中表示类的类型？**

```javascript
class Person {
  constructor(public name: string) {
    this.name = name;
  }
}

// 表示一个构造函数类型
type IConstructor<T> = new (name: string) => T;

//  也可以用接口表示
// interface IConstructor<T> {
//   new (name: string): T;
// }

function createIntance<T>(constructor: IConstructor<T>, name: string) {
  return new constructor(name);
}

const instance = createIntance<Person>(Person, 'rain');

console.log(instance.name);
```
