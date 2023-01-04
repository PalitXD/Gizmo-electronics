<script>
	import '../app.postcss';
</script>

<slot />

<style>
	:root {
		font-family: 'Valorant';
		color: white;
		background-color: black;
	}
	:global(body) {
		margin: 0;
	}
	:global(a) {
		text-decoration: none;
		color: white;
	}
	:global(*::selection) {
		color: transparent;
		text-shadow: 0 0 1rem white;
	}
</style>
