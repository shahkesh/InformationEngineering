/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

import vue from 'vue';

window.Vue = vue;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('query-message', require('./components/base/QueryMessage.vue').default);

//unsere
Vue.component('search-spell', require('./components/SearchComponent.vue').default);

Vue.component('create-spell', require('./components/CreateSpellComponent.vue').default);
Vue.component('create-kind', require('./components/CreateKindComponent.vue').default);

Vue.component('edit-spell', require('./components/EditSpellComponent.vue').default);
Vue.component('edit-kind', require('./components/EditKindComponent.vue').default);

Vue.component('list-spells', require('./components/ListSpellsComponent.vue').default);
Vue.component('list-kinds', require('./components/ListKindsComponent.vue').default);

Vue.component('show-kind', require('./components/ShowKindComponent.vue').default);
Vue.component('show-spell', require('./components/ShowSpellComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
