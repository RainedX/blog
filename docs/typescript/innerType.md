---
title: 更多内置类型
order: 13
toc: menu
nav:
  title: TypeScript
---

## `Partial<Type>`

简单使用

```javascript
interface Todo {
  title: string;
  description: string;
}

type myPartial<T> = { [K in keyof T]?: T[K] | undefined };
type PartialTodo = Partial<Todo>;
```

深度转化为可选属性

```javascript
interface ICount {
  count: number;
}
interface Todo {
  title: string;
  description: string;
  money: null;
  number: ICount;
}
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] | undefined;
};
type PartialTodo = DeepPartial<Todo>;
```

## `Required<Type>`

```javascript
interface ICount {
  count?: number;
}
interface Todo {
  title: string;
  description: string;
  money?: null;
  number: ICount;
}

type myRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? myRequired<T[K]> : T[K];
};
type PartialTodo = required<Todo>;

```

## `Readonly<Type>`

```javascript
interface ICount {
  count?: number;
}
interface Todo {
  title: string;
  description: string;
  money?: null;
  number: ICount;
}

type ReadonlyTodo = Readonly<Todo>;
```

## `Record<Keys,Type>`

## `Pick<Type, Keys>`

```javascript
interface Person {
  name: 'string';
  age: number;
  bool: boolean;
}

type myPick<T, K extends keyof T> = { [P in K]: T[P] };
type PickPerson = Pick<Person, 'name' | 'age'>;
```

## `Omit<Type, Keys>`

```javascript
let person = {
  name: '1',
  age: 1,
  address: 'no',
};
type myOmit<T, K extends any> = { [P in Exclude<keyof T, K>]: T[P] };
type OmitAddress = myOmit<typeof person, 'address'>;

```
