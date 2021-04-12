---
title: 类型
order: 2
toc: menu
nav:
  title: TypeScript
---

## 原始类型

- number
- string
- boolean
- undefined
- null
- void
- symbol
- bigint

```javascript
let num: number = 12;
let str: string = 'abc';
let flag: boolean = false;
```

## 其他常见类型

- any
- unknown
- never
- object
- 数组、元组、枚举等等

### 数组

```javascript
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [4, 5, 6];
let arr3: Array<number | string> = [1, 2, 'rain'];
let arr4: (number | string)[] = [1, 2, 'rain'];
```

### 元组

```javascript
let tuple: [string, number] = ['rain', 12]; // 正确
let tuple: [string, number] = ['rain', 12, 13]; // 错误
// 可以通过push方法向元组中添加元素，但是不可以通过索引添加，并且只能放入元组中以及声明过的类型
tuple.push('yy'); // 正确
tuple[2] = 'yy'; // 错误
```

### 枚举

```javascript
enum USER_ROLE_1 {
  ADMIN, // 默认下标为0
  USER,
}

// 可以正向枚举，也可以反向枚举

// var USER_ROLE_1;
//   (function (USER_ROLE_1) {
//       USER_ROLE_1[USER_ROLE_1["ADMIN"] = 0] = "ADMIN";
//       USER_ROLE_1[USER_ROLE_1["USER"] = 1] = "USER";
//   })(USER_ROLE_1 || (USER_ROLE_1 = {}));

console.log(USER_ROLE_1.ADMIN);
console.log(USER_ROLE_1[0]);

enum USER_ROLE_2 {
  ADMIN = 1,
  USER,
}
console.log(USER_ROLE_2[1]);
console.log(USER_ROLE_2.USER);

enum USER_ROLE_3 {
  ADMIN = 'A',
  USER = 'B',
}
console.log(USER_ROLE_3.USER);
// USER_ROLE_3不会反向枚举
//   var USER_ROLE_3;
//   (function (USER_ROLE_3) {
//       USER_ROLE_3["ADMIN"] = "A";
//       USER_ROLE_3["USER"] = "B";
//   })(USER_ROLE_3 || (USER_ROLE_3 = {}));
//   console.log(USER_ROLE_3.USER);

// }());
```

### 常量枚举

```javascript
const enum USER_ROLE {
  USER,
  ADMIN
}

console.log(USER_ROLE.USER); // 正确 console.log(0 /_ USER _/)
console.log(USER_ROLE[0]); // 错误 常量枚举不能反向枚举
```

### any

不进行任何类型检测的类型，相当于没有类型

### null 和 undefined

任何类型的子类型，在 strict 模式下，null 只能赋值给 null，undefined 只能赋值给 undefined

```javascript
'use strict';
let v: null = null; // 正确
let v: undefined = null; // 错误
```

### void 空类型

```javascript
'use strict';
// 严格模式只能将undefined赋值给void类型
let v: void;
v = undefined;

function fn(): void {
  return undefined;
}
```

### never 类型

`never`类型表示的是那些永不存在的值的类型

`never`类型是任何类型的子类型，可以赋值给任何类型

没有类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）

```javascript
let vv: never = 123; // 错误

// 永远达不到的情况有三种：错误 ｜ 死循环 ｜ 类型判断时出现never
function ErrorHandler(msg: string): never {
  throw new Error(msg);

  // return false; 永远不会执行到return
}

let err: never = ErrorHandler('错误');

function callback(): never {
  while (true) {}
}

function judgeType(val: string | number) {
  if (typeof val === 'string') {
    console.log(val);
  } else if (typeof val === 'number') {
    console.log(val);
  } else {
    console.log(val); // never
  }
}
```

### Symbol

```javascript
const sym1 = Symbol('key1');
const sym2 = Symbol('key2');

Symbol('key1') === Symbol('key1'); // false
```

### BigInt

```javascript
let num1 = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
let num2 = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(2);

console.log(num1 === num2); // false
```

### 非原始类型 object

```javascript
let value: object;

enum USER {
  USER,
}

value = [1];
value = {};
value = USER;
value = 1; // 错误
```

**在使用基本数据类型时会将原始类型包装成对象类型：**

```javascript
// 1..toString(); ===> Number(1).toString()

let num1: number = 1; // 正确
let num2: Number = 1; // 正确

let num3: number = Number(1); // 正确

let num4: number = new Number(1); // 错误
let num5: Number = new Number(1); // 正确 类也是一种类型可以用来描述实例

let bool1: boolean = true;
let bool2: Boolean = true;

let bool3: boolean = Boolean(true);
let bool4: Boolean = Boolean(true);

let bool5: boolean = new Boolean(false); // 错误
let bool6: Boolean = new Boolean(false);
```
