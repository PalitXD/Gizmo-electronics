<script>
	import { fly } from "svelte/transition";
	export let title;
	let showTitle = true;
   
</script>


	<div id="title" bind:this={title}>
		<h1>Gizmo Electronics</h1>

	</div>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">

<style>
    :global()
  
	#title {
		display: flex;
		align-items: center;
		position: absolute;
		right: 700px;
        top: -50px;
		margin: 2rem;
		gap: 5rem;
        color: white;
		white-space: nowrap;
		writing-mode: horizontal-tb;
        
	}
    h1{
        font-family: "Audiowide", sans-serif;
    }
	h1 {
		font-size: 4rem;
	}
  
</style>