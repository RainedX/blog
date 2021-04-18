---
title: 自定义类型
order: 14
toc: menu
nav:
  title: TypeScript
---

## 差集

```javascript
type D1 = {
  name: string;
  age: number;
};

type D2 = {
  name: string;
};

type Diff<T extends object, K extends object> = Omit<T, keyof K>;
type D = Diff<D1, D2>;

```

## 交集

```javascript
type D1 = {
  name: string;
  age: number;
};

type D2 = {
  name: string;
};

type InterSection<T extends object, K extends object> = Pick<
  T,
  Extract<keyof T, keyof K>
>;
type D = InterSection<D1, D2>;

```
