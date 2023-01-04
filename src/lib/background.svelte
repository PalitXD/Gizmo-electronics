<script>
	import { onMount } from "svelte";
	import * as THREE from "three";
	let canvas;
	const sideLength = 0;
	const spread = 1;
	let points;
	let material;
	let geometry;
	let colours = [];


	

	
</script>
<canvas bind:this={canvas} />

<style>
	canvas {
		width: 100%;
		height: 220vh;
		position: absolute;
		z-index: -10;
		
	}

</style>
