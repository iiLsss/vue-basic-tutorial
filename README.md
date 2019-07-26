# vue-basic-tutorial

### 注册全局过滤器

src/filters/index.js


src/main.js

```js
import * as filters from '@/filters'

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
```