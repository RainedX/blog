---
title: 栈和队列
order: 5
toc: menu
nav:
  title: 算法
  order: 5
---

- 题目描述：

```text
  请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
```

- 示例：

```javascript
  给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]
```

- 代码：

```javascript
const dailyTemperatures = function (temperatures) {
  const len = temperatures.length;
  const res = new Array(len).fill(0);
  const stack = [];

  for (let i = 0; i < len; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let top = stack.pop();
      res[top] = i - top;
    }

    stack.push(i);
  }

  return res;
};
```
