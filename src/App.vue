<template>
	<div id="app">
		<Header/>

		<div class="container">
			<router-view/>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
	components: {
		Header
	},
	created() {
		this.$store.dispatch("stocks/initStocks");
	}
};
</script>

<style>
</style>
