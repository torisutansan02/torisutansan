---
title: 'Best Time to Buy and Sell Stock'
date: 'March 11, 2025'
category: 'Sliding Window'
---

# Best Time to Buy and Sell Stock

You are given an array $prices$ where $prices[i]$ represents the value of the current index. Maximize your profit by choosing a single day to buy a stock and selling that stock on a future day.

- $prices = [7, 1, 5, 3, 6, 4]$
- Output: $6 - 1 = 5$
    - Buy the stock on day 2 and sell the stock on day 5.
    - You must buy before you sell.

## How to Solve?

Notice how you can make a profit if you buy a stock for cheaper earlier and then sell a stock later. This information is useful because it hints at using a sliding window.

Think about it like this. If I buy a stock on day 1 and not day 2, then the price of the stock goes down each consecutive day. Buying a stock for a cheaper price will always output a greater return than purchasing it at a more expensive cost.

### Sliding Window

To effectively utilize the sliding window technique, you have to first consider the fact that the time frame must be at least two days. Otherwise, you wouldn't buy a stock.

Set a max profit variable to keep track of the current profit. For your window, assign $l$ to the beginning of the list and $r$ to the second index.

- $l = 0$
- $r = 1$
- $maxProfit = 0$

From here, you want to see if the price of the stock at the left pointer is less than the price of the stock at the right pointer.

- $prices = [7, 1, 5, 3, 6, 4]$

|   left    |   right   |   price
|   ---     |   ---     |   ---
|   l       |           |   7
|           |   r       |   1
|           |           |   5
|           |           |   3
|           |           |   6
|           |           |   4

- $prices[l] > prices[r]$
    - Set $l$ to $r$ and increment $r$.
    - $maxProfit = 0$

|   left    |   right   |   price
|   ---     |   ---     |   ---
|           |           |   7
|   l       |           |   1
|           |   r       |   5
|           |           |   3
|           |           |   6
|           |           |   4

- $prices[l] < prices[r]$
    - Increment $r$.
    - $maxProfit = 4$.
        - $nums[r] - nums[l] = 4$

|   left    |   right   |   price
|   ---     |   ---     |   ---
|           |           |   7
|   l       |           |   1
|           |           |   5
|           |   r       |   3
|           |           |   6
|           |           |   4

- $prices[l] < prices[r]$
    - Increment $r$.
    - $maxProfit = 4$
        - $nums[r] - nums[l] = 2$
        - Old maxProfit had a greater value.

|   left    |   right   |   price
|   ---     |   ---     |   ---
|           |           |   7
|   l       |           |   1
|           |           |   5
|           |           |   3
|           |   r       |   6
|           |           |   4

- $prices[l] < prices[r]$
    - Increment $r$.
    - $maxProfit = 5$
        - $nums[r] - nums[l] = 5$
        - New maxProfit > old maxProfit.

|   left    |   right   |   price
|   ---     |   ---     |   ---
|           |           |   7
|   l       |           |   1
|           |           |   5
|           |           |   3
|           |           |   6
|           |   r       |   4

- $prices[l] < prices[r]$
    - $r$ reached the end of the list.
    - Don't increment $r$ or $l$ anymore.
    - $maxProfit = 5$
        - $nums[r] - nums[l] = 3$
        - Old maxProfit is greater.

### Helpful Hints
- Set $maxProfit$ to 0
- $l = 0, r = 1$
    - Compare index 0 to 1.
    - Expand window if:
        - $prices[l] < prices[r]$
    - Else:
        - Set $l$ to $r$ to find a cheaper price if possible.

### Sliding Window Solution
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Set the left pointer to 0
        l = 0
        # Set a maxProfit to 0
        maxProfit = 0

        # Iterate r in range 1 to end of the list
        for r in range(len(prices)):
            # If prices[r] < prices[l]
            # Set l to r
            if prices[r] < prices[l]:
                l = r
            # Get the maximum profit
            # Prev max, prices[r] - prices[l]
            else:
                maxProfit = max(maxProfit, prices[r] - prices[l])
        
        return maxProfit
