<template>
	<div class='container text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl' id='navigation'>
		<nav>
			<router-link :to='{ name: changeRoute }' id='nav-title'>chinese-ocr</router-link>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'Navigation',
	data(){
		return {
		}
	},
	computed: {
		changeRoute() {
			if (this.$store.state.signedIn) {
				return "learn"
			} else {
				return "landing"
			}
		}
	}
}
</script>

<style scoped>
.container {
	margin: auto;
	width: 50%;
	text-align: center;
	padding-top: 2vh;
}

#nav-title {
	text-decoration: none;
	color: #ffffff;
	opacity: 0.5;
	animation: 1.25s shiftopacity;
}

@keyframes shiftopacity {
	from {
		opacity: 0;
	}
	to {
		opacity: 0.5;
	}
}

#nav-title:hover {
	opacity: 0.87;
}
</style>