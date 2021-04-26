---
title: 排序
order: 1
toc: menu
nav:
  title: 算法
  order: 5
---

## 冒泡排序

- 题目描述：

```text
  给定一个长度为0～100的整数数组，对数组中元素按照从小到大的顺序排序
```

- 代码：

```javascript
class Solution {
  public int[] sortArr(int[] arr) {
    int len = arr.length;
    int temp = 0;

    for (int i = 0; i < len - 1; i++) {
      for (int j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j+1] = temp;
        }
      }
    }

    return arr;
  }
}
```

- 复杂度分析：
  - 时间复杂度：`O(N^2)`
  - 空间复杂度：`O(N)`
