<script>
	import { fly } from "svelte/transition";
	export let title;
	export let text;
	let showTitle = true;
   
</script>


	<div id="text" bind:this={text}>	
		<p>Gizmo's Electronics was conceptualized out of my personal desire<br>
			 to enable people to be self sustainable in how we live, work and commute.<br>
			This company is a spinoff of my desire to merge <br>
			computer science with electrical and mechanical engineering.<br>
			The goal is simple, make a product that meets and in some cases<br>
			 exceeds the needs of the customer.<br>
			
			Quality, durability and a lasting customer experience are what we strive for.<br>
			This is a small operation that will put the customer experience at the forefront.</p>
	</div>
	<div id="title" bind:this={title}>
		<h1>About</h1>
	</div>

	<div id= "contact">
		<h2>Contact us:</h2>
		<a href="https://www.instagram.com/p/CaQ2V7Ss4Df/?igshid=OGQ2MjdiOTE=">Instagram</a>
		<p>TELL: 876 941 2483<br>
			EMAIL: gizmo350k@gmail.com
		</p>
	</div>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">

<style>
    :global()
	#contact{
		
		align-items: center;
		position: absolute;
        top: 160%;
		margin: 2rem;
		opacity: 0;
		gap: 5rem;
        color: white;
		writing-mode: horizontal-tb;
		z-index: 2;
		transition: 0.4s;
	}
  #text{
	transition: 0.4s;

		display: flex;
		align-items: center;
		position: absolute;
        top: 120%;
		margin: 2rem;
		gap: 5rem;
        color: white;
		white-space: nowrap;
		writing-mode: horizontal-tb;
		z-index: 2;

}
  
	#title {
		transition: 0.4s;
		opacity: 0;
		display: flex;
		align-items: center;
		position: absolute;
        top: 100%;
		margin: 2rem;
		gap: 5rem;
        color: white;
		white-space: nowrap;
		writing-mode: horizontal-tb;
		z-index: 2;
        
	}
    h1{
        font-family: "Audiowide", sans-serif;
		font-size: 4rem;

    }
	h2{
		font-family: "Audiowide", sans-serif;
		font-size: 4rem;
	}
  
</style>