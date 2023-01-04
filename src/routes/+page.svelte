<script>
		let nav;
		let canvas;
	import { onMount } from "svelte";
	import Background from '$lib/background.svelte';
	import Text from '$lib/text.svelte';
	import { Alert } from 'flowbite-svelte';
	import Nav from '$lib/nav.svelte';
	import Desc from '$lib/Desc.svelte';

</script>
<Background />
<Nav />
<Desc />

<slot></slot>

<style>
	:global(body) {
	}
</style>