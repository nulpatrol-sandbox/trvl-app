import Vue from 'vue';
import ruLocale from 'element-ui/lib/locale/lang/ru-RU';

const ElementUI = require('element-ui');
const locale = ruLocale;
Vue.use(ElementUI, { locale });