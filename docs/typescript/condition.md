---
title: 条件类型
order: 12
toc: menu
nav:
  title: TypeScript
---

## 基本使用

条件类型够表示非统一的类型,以一个条件表达式进行类型关系检测，从而在两种类型中选择其一：

```javascript
// 若T能赋给U，那么类型是X，否则为Y,有点类似于JavaScript中的三元表达式
type myType<T> = T extends number ? X : Y
```

```javascript
interface Fish {
  fishName: string;
}
interface Water {
  water(): void;
}
interface Bird {
  birdName: string;
}
interface Sky {
  (): string;
}

type condition<T> = T extends Fish ? Water : Sky;

let c: condition<Bird> = function sky() {
  return 'happy';
};
```

## 条件类型与联合类型

条件类型有一个特性,就是「分布式有条件类型」，但是分布式有条件类型是有前提的，条件类型里待检查的类型必须是`naked type parameter`

`naked type parameter`：裸类型参数，是指类型参数没有被包装在其他类型里,比如没有被数组、元组、函数、Promise 等等包裹（[更多参考](https://juejin.cn/book/6844733813021491207/section/6844733813139079182)）

```javascript
type Condition<T> = T extends number ? 'Y' : 'N';
type C1 = Condition<string | number>; // C1 = N | Y
type C2 = Condition<string> | Condition<number>; // C1等价于C2

// 不会产生分布式有条件类型的特性
type Condition<T> = [T] extends [number] ? 'Y' : 'N';
type C1 = Condition<string | number>; // C1 = N
```

```javascript
interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

type R = FunctionPropertyNames<Part>; // R = "id"

```

## 内置条件类型

```javascript
type myExclude<T, U> = T extends U ? never : T;
type myExtract<T, U> = T extends U ? T : never;
type myNonNullable<T> = T extends null | undefined ? never : T;
// 自己实现
type T = myExclude<number | string, number>; // string
type R = Extract<number | string, number>; // number
type K = myNonNullable<'a' | null | undefined>; // 'a'

// 内置
// type T = Exclude<number | string, number>; // string
// type R = Extract<number | string, number>; // number
// type K = NonNullable<'a' | null | undefined>; // 'a'

```

## infer 类型推断

```javascript
type ParamType<T> = T extends (param: infer P) => any ? P : T;
```

如果`T`能赋值给`(param: infer P) => any`，则结果是`(param: infer P) => any`类型中的参数`P`，否则返回为`T`

### 提取函数类型的返回值类型

```javascript
type myReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

type Func = () => number;
type Test = ReturnType<Func>;

```

### 提取构造函数中参数类型

```javascript
type myParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

type Func = (name: string) => number;
type Test = Parameters<Func>;

```

### 提取构造函数参数类型

一个构造函数可以使用`new`来实例化，因此它的类型通常表示如下：

```javascript
type Constructor = new (...args: any[]) => any;
```

```javascript
class Person {
  constructor(public name: string, public age: number) {}
}

type myConstructorParameters< T extends new (...args: any) => any> = T extends new (...args: infer R) => any ? R : never;

type Params = ConstructorParameters<typeof Person>;
```

### 提取实例类型

```javascript
class Person {
  constructor(public name: string, public age: number) {}
}

type myConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : never;

type Params = InstanceType<typeof Person>;

```

### infer 实战

- 在协变位置上，同一个类型变量的多个候选类型会被推断为联合类型
  `[string, number] -> string | number`

```javascript
// tuple 类型在一定条件下，是可以赋值给数组类型
type TTuple = [string, number];
type TArray = Array<string | number>;

type Res = TTuple extends TArray ? true : false; // true
type ResO = TArray extends TTuple ? true : false; // false

// [string, number] -> string | number
type ElementOf<T> = T extends Array<infer R> ? R : never;
type TTuple = [string, number];
type ToUnion = ElementOf<TTuple>;
```

- 在逆变位置上，同一类型变量的多个候选类型将会被推断为交叉类型
  `string | number -> string & number`

```javascript
type UnionToIntersection<T> = (
  T extends any ? (args: T) => void : never
) extends ((args: infer R) => void)
  ? R
  : never;

type Result = UnionToIntersection<string | number>;
```

剖析：

第一步：`(U extends any ? (k: U) => void : never)`会把`union`拆分成 `(T1 extends any ? (k: T1) => void : never) | (T2 extends any ? (k: T2)=> void : never)`，即是得到` (k: T1) => void | (k: T2) => void`

第二步：`(k: T1) => void | (k: T2) => void extends ((k: infer I) => void) ? I : never`，根据在逆变位置上，同一类型变量的多个候选类型将会被推断为交叉类型，可以推断出 `I `为 `T1 & T2`
