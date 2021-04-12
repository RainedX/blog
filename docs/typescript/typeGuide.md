---
title: 类型守卫
order: 9
toc: menu
nav:
  title: TypeScript
---

类型守卫：通过判断识别所执行的代码块缩小类型的范围

## typeof

```javascript
function getValue(val: number | string) {
  if (typeof val === 'number') {
    val.toFixed(2);
  } else {
    val.toUpperCase();
  }
}
```

## instanceof

```javascript
class Person {
  username = 'rain';
  age = 11;
}

class Animal {
  name = 'hj';
}

function getName(instance: Person | Animal) {
  if (instance instanceof Person) {
    console.log(instance.username);
  }

  if (instance instanceof Animal) {
    console.log(instance.name);
  }
}
```

## in

`x in y` 表示`x`属性在`y`中存在

```javascript
class Person {
  username = 'rain';
  sayHello() {}
}

class Animal {
  name = 'hj';
  eat() {}
}

function getName(instance: Person | Animal) {
  if ('sayHello' in instance) {
    instance.sayHello();
  }

  if ('eat' in instance) {
    instance.eat();
  }
}
```

以上属于`javascript`和`typescript`共有的，下面介绍`typescript`中特有的

---

## 可辨识联合类型

```javascript
interface IBook1 {
  ID: 'XXX';
  used(flag: boolean): boolean;
}

interface IBook2 {
  ID: 'YYY';
  used(flag: boolean): boolean;
}

function getBook(book: IBook1 | IBook2) {
  if (book.ID === 'XXX') {
    // ID字段每个book不同，可辨识
    book.used(true);
  }

  if (book.ID === 'YYY') {
    book.used(false);
  }
}
```

## is

在 vue 源码中常用`is`来封装类型判断函数，比如：`isObject`， `isVNode`

```javascript
// error: 虽然我们知道在if判断后val一定是string,但是ts不知道
// ts会提示val可能是number类型, 不能执行toUpperCase方法

// const isString = (val: any): boolean => {
//   return typeof val === 'string'
// }

// 如果返回值是true，则val is string
const isString = (val: any): val is string => {
  return typeof val === 'string'
}

let val: number | string = Math.random() > 0.5 ? 1 : '1';

if (isString(val)) {
  val.toUpperCase();
}
```
