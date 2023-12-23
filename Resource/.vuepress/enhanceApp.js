import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//vuepress引入element-ui报错解决：https://blog.csdn.net/qq_32855007/article/details/108726430
export default ({ Vue, options, router }) => {
  Vue.use(Element);
};