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
