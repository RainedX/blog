---
title: 装饰器
order: 6
toc: menu
nav:
  title: TypeScript
---

## 装饰器介绍

在`tsconfig.json`中开启`"experimentalDecorators": true`

装饰器：给一个已有的方法或类扩展一些新的行为，而不是去直接修改它本身，**装饰器本质上是一个函数**，可以分为以下几种：

- 类装饰器

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

- 属性装饰器

  属性装饰器表达式会在运行时当作函数被调用，传入下列 2 个参数：

  - 第一个参数对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  - 第二个参数是属性的名称

- 方法装饰器
- 参数装饰器

## 装饰器执行顺序

## Reflect Metadata

```

```
