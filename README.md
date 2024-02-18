# react-playground

a repository to test npm packages and react hooks

# InfiniteScroll

- BUG: On reaching the last element, fetch gets called twice which causes the offset to increment twice. This leads to more data being called than necessary and will throw an error when there are no more pages.
