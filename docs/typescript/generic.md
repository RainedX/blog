---
title: 泛型
order: 8
toc: menu
nav:
  title: TypeScript
---

## 初识泛型

假设函数`handleCallback`接受一个`number`类型的参数并返回一个`number`类型的值，我们可以如下表示：

```javascript
function handleCallback(count: number): number {
  // xxx
  return count;
}
```

现在改变为接受一个`string`类型的参数并返回一个`string`类型的值，其他逻辑不变，我们如何处理以上场景？

我们需要告诉函数一个变量，这个变量代表了传入的类型，它是一种特殊的变量，只用于表示类型而不是值。

```javascript
function handleCallback<T>(count: T): T {
  return count;
}

handleCallback < number > 1;
handleCallback < string > 'hello';
```

## 函数中使用泛型

```javascript
// 在编译器眼里，这个T是可以代表任何类型的，它不知道是否存在length属性
// 错误的
function handleGeneric1<T>(arg: T): T {
  console.log(arg.length); // error
  return arg;
}

handleGeneric1<number[]>([1, 2, 3]);

// 正确 此时T当做类型的一部分使用，而不是整个类型
function handleGeneric2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

handleGeneric2<number>([1, 2, 3]);

```

## 泛型约束

```javascript

function handleAdd<T extends number, K extends number>(num1: T, num2: K) {
  num1 + num2
}

handleAdd(1, 2);
```

## 属性约束

```javascript
const getVal = <T extends object, K extends keyof T>(obj: T, key: K) => {
  console.log(obj[key]);
}

getVal({ a: 1 }, 'a')
```

## 默认泛型

```javascript
interface IGen<T = string> {
  [key: string]: T;
}

type T1 = IGen;
type T2 = IGen<number>;
type T3 = IGen<boolean>;

let str: T1 = { username: 'rain' };
let age: T2 = { age: 12 };
let bool: T3 = { flag: false };
```

## 接口中使用泛型

```javascript
// 第一种 写在函数上的泛型表示调用函数时传入具体类型
interface IG1 {
  <T, K>(count: T, num: K): void;
}

const handleGeneric1: IG1 = <T, K>(count: T, num: K): void => {
  console.log(count, num);
};

handleGeneric1(1, 1);

// 第二种 写在接口后面的泛型表示使用接口时传入具体类型
interface IG2<T, K> {
  (count: T, num: K): void;
}

const handleGeneric2: IG2<number, number> = <T, K>(count: T, num: K): void => {
  console.log(count, num);
};
```

## 类型别名中使用泛型

```javascript
type IG1 = <T, K>(count: T, num: K) => void;
const handleGeneric1: IG1 = <T, K>(count: T, num: K): void => {
  console.log(count, num);
};

type IG2<T, K> = (count: T, num: K) => void;
const handleGeneric2: IG2<number, number> = <T, K>(count: T, num: K): void => {
  console.log(count, num);
};
```

## 类中使用泛型

```javascript
class Person<T> {
  arr: T[] = [];

  addMoney(money: T) {
    this.arr.push(money);
  }

  getMoney() {
    return this.arr;
  }
}

const p = new Person<number>();

p.addMoney(1);
p.addMoney(2);

p.getMoney();
```
