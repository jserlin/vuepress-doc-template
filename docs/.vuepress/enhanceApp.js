import 'element-ui/lib/theme-chalk/index.css';

import ElementUI from 'element-ui';

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
  }
}