<!-- Real-World Project Example: A Cryptocurrency Dashboard
Imagine you're building a cryptocurrency dashboard where users can view real-time prices of different coins. This dashboard fetches data from an API and allows users to filter coins based on price, market cap, etc.

Problem Without Memoization
Every time the user interacts (like selecting a filter), all components might recompute filtered results unnecessarily, causing performance issues.

Solution Using Memoization
useMemo: Avoid recalculating the filtered list unless necessary.
useCallback: Prevent passing new function references to child components, reducing unnecessary re-renders. -->



<!-- Scenario: A Cryptocurrency Dashboard with Search & Sorting
Dashboard fetches crypto prices.
User can search for a coin.
User can sort by price.
Optimized with memoization to avoid unnecessary re-renders. -->