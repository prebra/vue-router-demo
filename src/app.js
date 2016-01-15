var Vue = require('vue');
var VueRouter = require('vue-router');
var $ = require('zepto.min.js');
Vue.use(VueRouter);

var App = Vue.extend(require('./app.vue'));

var router = new VueRouter();

router.map({
    '/send/:username': {
        component: require('./send.vue')
    },  
    '/list': {
        component: require('./list.vue')
    }
})

 router.redirect({
  
})

router.beforeEach(function (transition) {
    if (transition.to.path !== '/') {
        router.app.isIndex = false;
    } else {
        router.app.isIndex = true;
    }
    transition.next();
})

router.start(App, '#app');

window.router = router;