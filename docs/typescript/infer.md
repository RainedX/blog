---
title: 类型推断
order: 3
toc: menu
nav:
  title: TypeScript
---

## 联合类型

```javascript
// 联合类型没有初始化的时候，只能调用两者类型中公共的方法，一般建议先赋值，再使用
let vvv: string | number; // 声明

vvv = 1; // 赋值
vvv.toFixed(2); // 调用方法

vvv = 'abc'; // 赋值
vvv.toLocaleLowerCase(); // 调用方法

let ele: HTMLElement | null = document.getElementById('#root');

ele!.style.color = 'red'; // 非空断言，表示一定有值
console.log(ele?.style?.color); // 只读 ele && ele.style && ele.style.color

```

## 类型断言

```javascript
let ele: HTMLElement | null = document.getElementById('#root');

(ele as HTMLElement).style.color = 'red'; // 推荐 不能断言不存在的属性
(<HTMLElement>ele).style.color = 'red'; // 不推荐 和JSX语法冲突

// 双重断言
(ele as any) as boolean; // 不建议使用，会破坏原有类型
```

## 字面量类型

```javascript
type Color = 'yellow' | 'red' | 'green'; // 类型别名
let color: Color;

color = 'red';
color = 'blue'; // 错误
```
## 其他
```javascript
// 索引访问操作符
interface IPerson {
  name: 'zf',
  age: number
}

type P1= IPerson['age']

// 使用typeof反推变量类型
let person = { username: 1 };
type P2 = typeof person;
```