---
title: 数组
order: 1
toc: menu
nav:
  title: 算法
  order: 3
---

## 两数之和

- 题目描述：

```text
  给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
```

- 示例：

```text
nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
```

- 代码：

```javascript
const twoSum = function (nums, target) {
  const result = [];
  const len = nums.length;
  const maps = {};

  for (let i = 0, len = nums.length; i < len; i++) {
    if (maps[target - nums[i]] != undefined) {
      return [maps[target - nums[i]], i];
    }

    maps[nums[i]] = i;
  }

  return result;
};
```

- 复杂度分析：
  - 时间复杂度：`O(N)`
  - 空间复杂度：`O(N)`
