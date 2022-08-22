// 按需导出
import {box1} from './box1'
// 默认导出
import box2 from './box2'

// 调用函数
box1()
box2()

// 4. 要求能打包css
// webpack打包css文件：1. 在main.js里直接引入css文件。
import './styles/index.css'

// 5. 要求能打包less
// webpack打包less文件：1. 在main.js里直接引入less文件。
import './styles/index.less'

// 6. 要求在src下新建一个app.vue文件, 并在main.js中引入, 并且打包不报错即可
// webpack打包vue文件：1. 在main.js里直接引入vue文件。
import App from './app.vue'
