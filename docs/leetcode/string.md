---
title: 字符串
order: 2
toc: menu
nav:
  title: 算法
  order: 5
---

- 题目描述：

```text
  给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串
```

- 示例：

```javascript
输入: 'aba';
输出: true;

输入: 'abca';
输出: true;
```

- 代码：

```javascript
const validPalindrome = (s) => {
  let start = 0;
  let end = s.length - 1;

  function isPalindrome(start, end) {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }

      start++;
      end--;
    }

    return true;
  }

  while (start < end && s[start] === s[end]) {
    start++;
    end--;
  }

  if (isPalindrome(start + 1, end)) {
    return true;
  }

  if (isPalindrome(start, end - 1)) {
    return true;
  }

  return false;
};
```

- 复杂度分析：
- 复杂度分析：
  - 时间复杂度：`O(N)`
  - 空间复杂度：`O(1)`
