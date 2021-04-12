---
title: 交叉类型
order: 10
toc: menu
nav:
  title: TypeScript
---

**交叉类型是将多个类型合并为一个类型，取交集**

```javascript
interface Person {
  eat(): void;
}

interface Animal {
  bark(): void;
}

type It = Person & Animal;
let it: It = {
  eat() {},
  bark() {},
};
```

```javascript
interface Person {
  name: string;
}

interface Animal {
  name: number;
}

type It = Person & Animal;

function fn(): never {
  throw new Error();
}
let it: It = { name: fn() };
```
