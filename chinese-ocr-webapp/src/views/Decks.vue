<template>
	<div class="grid grid-cols-1 md:grid-cols-4 opacity-87">
		<div class='col-span-1'>
			<Sidebar/>
		</div>
		<div class='col-span-1 ml-8 md:ml-0 mt-10 md:mt-20 p-8 md:px-8 mt-12 md:mt-0' id='page-content'>
			<p class="opacity-87 text-xl lg:text-2xl xl:text-3xl font-normal">Decks</p>
			<p v-if='$store.state.formSuccess' class='text-green-500 text-base mt-1 -mb-1' id='successField'>{{ $store.state.formSuccess }}</p>
			<div class="mt-8">
				<router-link :to='{ name: "create" }'
				class='btn btn-purple opacity-87 text-white py-2 px-4 rounded'>
					Add Deck
				</router-link>
			</div>
			<div class='mt-12'>
				<div v-for='(n, i) in $store.state.numOfDecks' :key='i.key' class='mt-4'>
					<!-- Put cards for each deck here -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Sidebar from '../components/Sidebar'
export default {
	name: 'Decks',
	data() {
		return {
		}
	},
	components: {
		Sidebar
	},
	mounted() {
		if (!this.$store.state.numOfDecks){
			this.$store.dispatch('getNumOfDecks')
		}
	}
}
</script>

<style scoped>

</style>