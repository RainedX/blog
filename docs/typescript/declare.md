---
title: 环境声明
order: 15
toc: menu
nav:
  title: TypeScript
---

如果在 Typescript 项目中引入第三方库时，TS 编译器会检查其声明文件内容，若没有找到则提示错误

你可以通过`declare`关键字，来告诉`TypeScript`，你正在试图表述一个其他地方已经存在的代码

```javascript
declare var foo: number;

foo = 123;
```

你可以选择把这些声明放入`.ts`或者`.d.ts`里。在你实际的项目里，应该把声明放入`.d.ts`里面。

如果一个文件有扩展名`.d.ts`，这意味着每个顶级的声明都必须以`declare`关键字作为前缀。

在这里`TypeScript`将不会把它编译成任何代码，同时他需要确保这些在编译时存在。

**环境声明就好像你与编译器之间的一个约定，如果这些没有在编译时存在，但是你却使用了它们，则事情将会在没有警告的情况下中断**

在`vue-router`中，通常在`package.json`中有以下定义：

```javascript
"typings": "types/index.d.ts",
```

告诉编译器去 types 中查找环境声明

```javascript
// index.d.ts
import './vue';
import { VueRouter } from './router';

export default VueRouter;

export {
  RouterMode,
  RawLocation,
  RedirectOption,
  RouterOptions,
  RouteConfig,
  RouteRecord,
  RouteRecordPublic,
  Location,
  Route,
  NavigationGuard,
  NavigationGuardNext,
  NavigationFailureType,
  NavigationFailure,
} from './router';
```

```javascript
// vue.d.ts
import Vue from 'vue'
import VueRouter, { Route, RawLocation, NavigationGuard } from './index'

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
    $route: Route
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    router?: VueRouter
    beforeRouteEnter?: NavigationGuard<V>
    beforeRouteLeave?: NavigationGuard<V>
    beforeRouteUpdate?: NavigationGuard<V>
  }
}
```
