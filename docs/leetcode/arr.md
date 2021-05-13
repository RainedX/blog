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

## 三数之和

- 题目描述：

```text
  给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
```

- 示例：

```text
给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
```

- 代码：

```javascript
const threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let result = [];

  let len = nums.length;
  let j = 1;
  let k = len - 1;

  for (let i = 0; i < len - 2; i++) {
    j = i + 1;
    k = len - 1;

    if ((i > 0) & (nums[i] === nums[i - 1])) {
      continue;
    }

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        if (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
        if (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        if (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        if (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return result;
};
```
