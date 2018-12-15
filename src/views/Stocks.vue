<template>
	<div>
		<h2>Stocks Available</h2>
		<hr>

		<StockBuy v-for="stock in stocks" :key="stock.id" :stock="stock"/>
	</div>
</template>

<script>
import StockBuy from "@/components/StockBuy.vue";

export default {
	data() {
		return {
			stocks: [
				{ id: 1, name: "BMW", price: 110 },
				{ id: 2, name: "Google", price: 200 },
				{ id: 3, name: "Apple", price: 250 },
				{ id: 4, name: "Twitter", price: 50 }
			]
		};
	},
	components: {
		StockBuy
	}
};
</script>
