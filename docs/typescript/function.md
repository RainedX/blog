---
title: 函数类型
order: 4
toc: menu
nav:
  title: TypeScript
---

## 通过 function 关键字声明

```javascript
function Sum(a: number, b: number): number {
  return a + b;
}
```

## 通过表达式声明

```javascript
type SumType = (a: number, b: number) => number;
let sum: SumType = (a: number, b: number): number => {
  return a + b;
};
```

## 可选参数

```javascript
type SumType = (a: number, b?: number) => number;
let sum: SumType = (a: number): number => {
  return a;
};
```

## 默认参数

```javascript
type SumType = (a: number, b?: number) => number;
let sum: SumType = (a: number, b: number = 2): number => {
  return a + b;
};

sum(1); // 3
```

## 剩余参数

```javascript
type SumType = (...args: number[]) => number;
let sum: SumType = (...args) => {
  return Math.max(...args);
};

sum(1, 2, 3);
```

## 函数重载

**允许一个函数接受不同数量或类型的参数时，作出不同的处理**

eg：实现一个函数，输入数字`123`的时候，输出为`[1, 2, 3]`的数组，输入字符串`"123"`的时候，输出为`['1', '2', '3']`的数组

```javascript
function toArray(value: number): number[]; // 函数定义
function toArray(value: string): string[]; // 函数定义
function toArray(value: number | string) { // 函数实现
  if (typeof value === 'number') {
    return value
      .toString()
      .split('')
      .map((item) => Number(item));
  } else {
    return value.split('');
  }
}
```

如果使用联合类型是无法准确的表达上述的情况,输入为数字的时候，输出为数字数组，输入为字符串的时候，输出为字符串数组

```javascript
function toArray(value: number | string): number[] | string[] {
  if (typeof value === 'number') {
    return value
      .toString()
      .split('')
      .map((item) => Number(item));
  } else {
    return value.split('');
  }
}
```
