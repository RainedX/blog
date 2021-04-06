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
