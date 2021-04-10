---
title: 接口
order: 6
toc: menu
nav:
  title: TypeScript
---

## 概述

- 接口的含义：在面向对象编程中表示行为的抽象，或者描述对象的形状
- 接口的作用：为这些类型命名和为你的代码或第三方代码定义契约

## 基本使用

```javascript
namespace d {
  interface IUser {
    username: string;
    age: number;
  }

  const getUserName = (user: IUser) => user.username;

  getUserName({ username: 'rain', age: 12 });
}
```

## 支持任意参数

```javascript
namespace d {
  interface IUser {
    username: string;
    age: number;
    [key: string]: any;
  }

  const getUserName = (user: IUser) => user.username;

  getUserName({ username: 'rain', age: 12, sex: 'male' });
}

```

## 接口继承接口

```javascript
interface IUser {
  name: string;
  age: number;
}

interface IExtendUser extends IUser {
  sex: string;
}
```

## 类继承多个接口

```javascript
namespace d {
  // 接口中的内容是抽象的，没有具体实现
  interface IUser {
    speak(name: string): void; // 描述类的原型方法时，如果为void代表不关心方法的返回值
    count: number;
  }

  interface IHome {
    adress: string;
  }

  class User implements IUser, IHome {
    speak(name: string): string {
      return 'rain';
    }
    public count!: number;
    adress!: string;
  }
}

```

## `type`和`interface`区别

- 相同点：

  - 都可以描述一个对象或者函数

  ```javascript
  // interface
  interface IUser {
    name: string;
    age: number;
  }

  interface ISetUser {
    (name: string, age: number): void;
  }

  // type
  type myUser = {
    name: string,
    age: string,
  };

  type setMyUser = (name: string, age: number) => void;
  ```

  - 拓展（extends）与 交叉类型（Intersection Types）

  ```javascript
  // interface可以extends，但type是不允许extends和implement的
  // type可以通过交叉类型实现interface的extend行为
  // 两者不是相互独立的，interface可以继承type,type也可以与nterface类型交叉

  // interface extends interface
  interface IName {
    name: string;
  }
  interface IUser extends IName {
    age: number;
  }
  // type 与 type 交叉
  type myName = {
    name: string,
  };
  type myUser = myName & { age: number };

  // interface extends type
  interface IExtend extends myName {
    age: number;
  }
  // type 与 interface 交叉
  type User = IName & {
    age: number,
  };
  ```

- 不同点：

  - type 可以声明基本类型别名，联合类型，元组等类型

  ```javascript
    // 基本类型别名
    type Name = string

    // 联合类型
    interface Dog {
        wong();
    }
    interface Cat {
        miao();
    }

    type Pet = Dog | Cat

    // 具体定义数组每个位置的类型
    type PetList = [Dog, Pet]
  ```

  - `type`语句中还可以使用`typeof`获取实例的类型进行赋值
    ```javascript
    // 当你想获取一个变量的类型时，使用 typeof
    let div = document.createElement('div');
    type B = typeof div;
    ```
  - `interface`可以声明合并

  ```javascript
    interface User {
      name: string
      age: number
    }

    interface User {
      sex: string
    }

    /*
    User 接口为 {
      name: string
      age: number
      sex: string
    }
    */
  ```

  **type 关键字的产生的东西官方有一个名字 type aliases ，就是类型别名，重点是它是别名不是真正的类型**

  更多内容参考：https://github.com/SunshowerC/blog/issues/7
