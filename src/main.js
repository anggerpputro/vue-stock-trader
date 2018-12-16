import Vue from "vue";
import VueResource from "vue-resource";

import App from "./App.vue";
import store from "./store/store";
import router from "./router";

Vue.use(VueResource);

Vue.config.productionTip = false;
Vue.http.options.root = "https://vue-stock-trader-3f4c4.firebaseio.com/";

Vue.filter("currency", value => {
	return "$" + value.toLocaleString();
});

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount("#app");
