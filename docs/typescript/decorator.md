---
title: 装饰器
order: 6
toc: menu
nav:
  title: TypeScript
---

## defineProperty

可以在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象

- 语法`Object.defineProperty(target, key, descriptor)`
- 参数
  - target：要在其上定义属性的对象
  - key：要定义或修改的属性名称
  - descriptor: 将被定义或修改的属性描述符
- 例如：

  ```javascript
  var obj = {};
  Object.defineProperty(obj, 'count', {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true,
  });

  console.log(obj.count); // 1
  ```

属性描述符主要有两种形式：

- 数据描述符
  - value
  - writeable
  - configurable
  - enumerable
- 存取描述符

  - get
  - set
  - configurable
  - enumerable

**属性描述符不可以和存取描述符混着用**

```javascript
// error 不允许混着用
Object.defineProperty({}, 'name', {
  value: 'rain',
  get() function() {
    return 'yy'
  }
})
```

- `value默认undefined`
- ` writable默认false，当writable = true时，该属性才可以被赋值运算符改变`
- `configurable默认false，当configurable = true时，改属性描述符才可以被改变，也可以被删除`
- `enumerable默认false，当enumerable = true时，该属性才可以在对象上被枚举`

## 装饰器介绍

在`tsconfig.json`中开启`"experimentalDecorators": true`

装饰器：给一个已有的方法或类扩展一些新的行为，而不是去直接修改它本身，**装饰器本质上是一个函数**，可以分为以下几种：

### 类装饰器

类装饰器在类声明之前声明，用来观察、修改类定义，当修饰类的时候，会把构造器传递进去

```javascript
function addName(target: Function) {
  console.log('name');
  target.prototype.username = 'rain';
}
function addType(target: Function) {
  console.log('type');
  target.prototype.type = 'Dog';
}
// 多个装饰器倒序输出 type ===> name
@addName
@addType
class Animal {
  public age!: number;
  public username!: string;
  constructor(age: number) {
    this.age = age;
    // this.username = 'yy';
  }
}

let dog = new Animal(2);
console.log(dog.username); // rain 会去原型链查找
```

### 属性装饰器

属性装饰器表达式会在运行时当作函数被调用，传入下列 2 个参数：

- 第一个参数对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
- 第二个参数是属性的名称

```javascript
function toUpperCase(target: any, key: string) {
  let value = target[key];
  Object.defineProperty(target, key, {
    get() {
      return value.toUpperCase();
    },
    set(newVal) {
      value = newVal;
    },
  });
}
function toLowerCase(target: any, key: string) {
  let value = target[key];
  Object.defineProperty(target, key, {
    get() {
      return value.toLowerCase();
    },
    set(newVal) {
      value = newVal;
    },
  });
}

class Animal {
  public age!: number;
  @toUpperCase
  public username!: string;

  @toLowerCase
  static type: string = 'DOG';
  constructor(age: number, username: string) {
    this.age = age;
    this.username = username;
    // this.username = 'yy';
  }
}

let dog = new Animal(2, 'rain');
console.log(dog.username); // Rain
console.log(Animal.type); // dog
```

### 方法装饰器

- 第一个参数对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
- 第二个参数是方法的名称
- 第三个参数是方法描述符

```javascript
  function handleEnum(
  target: any,
  property: string,
  descriptor: PropertyDescriptor,
) {
  descriptor.enumerable = false;
}

class Animal {
  public age!: number;

  constructor(age: number) {
    this.age = age;
  }

  @handleEnum
  getAge() {
    console.log(this.age);
  }
}

let dog = new Animal(2);
console.log(dog); // getAge不可枚举
```

### 参数装饰器

- 第 1 个参数类的原型对象
- 第 2 个参数的名称
- 第 3 个参数在函数列表中的索引

```javascript
function addAge(target: any, key: string, index: number) {
  target.age = 12;
}
class Person {
  age!: number;
  login(username: string, @addAge password: string) {
    console.log(this.age, username, password);
  }
}

let p = new Person();
p.login('zhufeng', '123456');

```

参数装饰器可以提供信息，给比如给类原型添加了一个新的属性，属性中包含一系列信息，这些信息就被成为「元数据」，然后我们就可以使用另外一个装饰器来读取「元数据」。类似`Java`中的注解

## 装饰器执行顺序

当多个装饰器应用在一个声明上时会进行如下步骤的操作：（类的两个装饰器输出结果）

- 由上至下依次对装饰器表达式求值
- 求值的结果会被当作函数，由下至上依次调用
- 方法和属性装饰器，谁在前面谁先执行，参数属于方法一部分，会接着方法执行
- 有多个参数装饰器时：求值的结果会被当作函数，从最后一个参数依次向前执行
- 类装饰器总是最后执行

```javascript
function oneDecorator() {
  console.log('before---oneDecorator');
  return function (target: any) {
    console.log('after---oneDecorator');
  };
}
function twoDecorator() {
  console.log('before---twoDecorator');
  return function (target: any) {
    console.log('after---twoDecorator');
  };
}
function methodDecorator() {
  console.log('before---methodDecorator');
  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('after---methodDecorator');
  };
}
function param1Decorator() {
  console.log('before---param1Decorator');
  return function (target: any, methodName: string, paramIndex: number) {
    console.log('after---param1Decorator');
  };
}
function param2Decorator() {
  console.log('before---param2Decorator');
  return function (target: any, methodName: string, paramIndex: number) {
    console.log('after---parm2Decorator');
  };
}
function propDecorator(name: string) {
  console.log(name, ':before---propDecorator');
  return function (target: any, propertyName: string) {
    console.log(name, ':after--- propDecorator');
  };
}

@oneDecorator()
@twoDecorator()
class Person {
  @propDecorator('username')
  name: string = 'rain';
  @propDecorator('age')
  age: number = 10;
  @methodDecorator()
  greet(@param1Decorator() p1: string, @param2Decorator() p2: string) {}
}

export {};

// result：
username: before-- - propDecorator;
username: after-- - propDecorator;

age: before-- - propDecorator;
age: after-- - propDecorator;

before-- - methodDecorator;
before-- - param1Decorator;
before-- - param2Decorator;

after-- - parm2Decorator;
after-- - param1Decorator;
after-- - methodDecorator;

before-- - oneDecorator;
before-- - twoDecorator;

after-- - twoDecorator;
after-- - oneDecorator;
```

## Reflect Metadata

`es7`的一个提案，主要作用：在声明的时候添加和读取元数据。

使用之前，`yarn add reflect-metadata -S`并且在`tsconfig.json`中配置`emitDecoratorMetadata: true`

```javascript
// 使用ts-node编译时，需要配置"module": "commonjs"
// 否则原有基于rollup配置，"module": "ESNext"，需要使用(Reflect as any).defineMetadata
import 'reflect-metadata';

const user = {
  name: 'Rain',
};

Reflect.defineMetadata('data', 'test', user);

console.log(Reflect.getMetadata('data', user)); // test

@Reflect.metadata('username', 'rain')
class Person {
  @Reflect.metadata('age', 12)
  getUserAge() {}
}

console.log(Reflect.getMetadata('username', Person)); // rain
console.log(Reflect.getMetadata('age', Person.prototype, 'getUserAge')); // 12
```
