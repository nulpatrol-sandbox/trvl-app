import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ru from '../locales/ru';

Vue.use(VueI18n);

export default ({ app, store }) => {
    app.i18n = new VueI18n({
        locale: store.state.locale,
        fallbackLocale: 'ru',
        messages: {
            ru,
        }
    });
}