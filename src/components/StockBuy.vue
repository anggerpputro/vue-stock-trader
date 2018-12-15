<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel" :class="insufficientFunds ? 'panel-danger' : 'panel-success'">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{ stock.name }}
					<small>(Price: {{ stock.price | currency }})</small>
				</h3>
			</div>

			<div class="panel-body row">
				<div class="form-group" :class="insufficientFunds ? 'has-error' : ''">
					<div :class="insufficientFunds ? 'col-xs-6' : 'col-xs-8'">
						<input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
					</div>

					<div class="text-right" :class="insufficientFunds ? 'col-xs-6' : 'col-xs-4'">
						<button
							class="btn"
							:class="insufficientFunds ? 'btn-danger' : 'btn-success'"
							@click="buyStock"
							:disabled="insufficientFunds || quantity <= 0"
						>{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["stock"],
	data() {
		return {
			quantity: 0
		};
	},
	computed: {
		funds() {
			return this.$store.getters["portofolio/funds"];
		},
		insufficientFunds() {
			return this.quantity * this.stock.price > this.funds;
		}
	},
	methods: {
		buyStock() {
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: parseInt(this.quantity)
			};
			this.$store.dispatch("stocks/buyStock", order);
			this.quantity = 0;
		}
	}
};
</script>
