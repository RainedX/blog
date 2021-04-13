---
title: 兼容性
order: 11
toc: menu
nav:
  title: TypeScript
---

- `typescript`的子类型是基于**结构子类型**的，只要结构可以兼容，就是子类型。（Duck Type）
- `java`是基于**名义子类型**的，必须显示声明子类型关系（继承），才可以兼容。

## 基本数据类型的兼容性

```javascript
let str1: string | number;
let str2: number;

str2 = 2;
str1 = str2; // ok
```

```javascript
// 结构子类型
interface IStr {
  toString(): string;
}

let str: IStr = 'rain';
```

## 接口兼容性

```javascript
interface IStr {
  toString(): string;
}

interface INum {
  toString(): string;
  add() : number;
}

let str!: IStr;
let num!: INum;

str = num; // ok
```

## 类的兼容性

**只有实例属性和方法会比较，构造函数和静态成员不会被比较**

```javascript
class Person {
  age: number;
}

class Animal {
  age: number;
}

let p!: Person;
let s!: Animal;

p = s; // OK
s = p; // OK
```

有`private`或者`protected`关键字类型就无法兼容，除非是继承的类可以兼容

```javascript
class Parent {
    protected name: string = 'rain';
    age: number = 1
}
class Child extends Parent{}
let child:Parent = new Child;
```

## 泛型的兼容性

**根据是否被成员使用而不同**

```javascript
// 由于泛型 T 被成员 name 使用了,所以类型不再兼容
interface Person<T> {
  name: T;
}

let x: Person<string>;
let y: Person<number>;

x = y; // error
y = x; //error
```

## 枚举的兼容性

```javascript
// 不同的枚举类型不兼容
enum USER_ROLES_1 {
    role = 1
}
enum USER_ROLES_2 {
    role = 1
}
let user1!: USER_ROLES_1
let user2!: USER_ROLES_2

user1 = user2 // error
```

## 函数的兼容性

```javascript
// 函数的兼容性要求：
// sum2的参数个数小于sum1的参数个数
let sum1 = (a: number, b: number) => {};
let sum2 = (a: number) => {};

sum1 = sum2;

// 函数返回值（遵循基本类型的特性和接口特性，主要从安全性考虑）
type sum3 = () => string | number;
type sum4 = () => number;

let s3: sum3;
let s4: sum4 = () => 3;

s3 = s4;
```

## 函数的逆变与协变

对于函数类型来说，函数参数的类型兼容是反向的，我们称之为**逆变** ，返回值的类型兼容是正向的，称之为**协变**。
[更多参考](https://juejin.cn/post/6844904037922373639#heading-13)

```javascript
class Parent {
  pName: string = 'xxx';
}
class Child extends Parent {
  cName: string = 'yyy';
}
class GrandChild extends Child {
  gName: string = 'zzz';
}

type cbType = (person: Child) => Child;

function handle(cb: cbType) {}

let fn = (person: Parent) => new GrandChild();
handle(fn);
```
