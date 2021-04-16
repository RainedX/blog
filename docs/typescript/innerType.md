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

将类型 T 中所有属性转换为必写

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

将类型 T 中所有属性转换为只读

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

将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型，`Keys`可以是联合类型、对象、枚举、`string`、`number`、`symbol`

```javascript
type unique = keyof any; // string | number | symbol

type myRecord<K extends keyof any, T> = {
  [P in K]: T;
};

interface Goods {
  id: number;
  name: string;
  price?: number;
}

const goodsMap: Record<string, Goods> = {};
const goodsList: Goods[] = [
  { id: 1, name: 'apple' },
  { id: 2, name: 'orange', price: 2 },
];

goodsList.forEach((goods) => {
  goodsMap[goods.name] = goods;
});
```

```javascript
type IHttpMethods = 'get' | 'post' | 'delete' | 'put';

interface AxiosRequestConfig {
  url?: string;
  methods: IHttpMethods;
  baseURL?: string;
  headers?: any;
  params?: any;
  data?: any;
  timeout?: number;
  withCredentials?: boolean;
}

interface IHttpFn {
  <T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

const methods = ['get', 'post', 'delete', 'put'];
const httpMethods: Record<IHttpMethods, IHttpFn> = methods.reduce(
  (previousValue: any, currentValue) => {
    previousValue[currentValue] = (
      url: string,
      options: AxiosRequestConfig,
    ) => {
      // const { data, ...config } = options;
      // Axios[currentValue] = (url, data, config) => { ... }
    };

    return previousValue;
  },
  {},
);
```

## `Pick<Type, Keys>`

从类型 T 中挑选出指定属性的类型

```javascript
interface Person {
  name: 'string';
  age: number;
  bool: boolean;
}

type myPick<T, K extends keyof T> = { [P in K]: T[P] };
type PickPerson = Pick<Person, 'name' | 'age'>;
// type OmitAddress = {
//     name: string;
//     age: number;
// }
```

## `Omit<Type, Keys>`

从类型 T 中排除出指定属性的类型

```javascript
let person = {
  name: '1',
  age: 1,
  address: 'no',
};
type myOmit<T, K extends any> = { [P in Exclude<keyof T, K>]: T[P] };
type OmitAddress = myOmit<typeof person, 'address'>;
// type OmitAddress = {
//     name: string;
//     age: number;
// }
```
