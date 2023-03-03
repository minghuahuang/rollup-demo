<template>
	<div>
		<div class="wrapper">{{ msg }}</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const msg = ref("rollup vue");
</script>

<style scoped>
	.wrapper {
		color: blue;
	}
</style>
