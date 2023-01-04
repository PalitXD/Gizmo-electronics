
<nav bind:this={nav} id = "nav">

<img src="GIZMO2.png" alt="GIZMO" style="width:100px">

<Button color="dark"><Chevron>Products</Chevron></Button>
<Dropdown >
  <DropdownItem>Ebikes</DropdownItem>
  <DropdownItem>Ebike Kits</DropdownItem>
  <DropdownItem>Battery Packs</DropdownItem>
  <DropdownItem>Chargers</DropdownItem>
</Dropdown>
<Button color="dark">Rentals</Button>
<Button color="dark">About Us</Button>
<Button color="dark">Contact</Button>


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">
	</nav>


<style>
		@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");

	*{
		box-sizing: borderbox;
		marrgin: 0;
		padding: 0;
		width: 100%;
		background-color: #333;
	}
nav{
	display: flex;
	position: fixed;
	justify-content: space-between;
	align-items: center;
	padding: 30px 10px;
	transition: 0.4s;
	z-index: 3;
}
button{
	
}

ul {
  list-style-type: none;
  padding: 0px 20px;

}
li{
	display: inline-block;
	padding: 0px 200px 0 0;
}

	li a {
 font-size: 20px;
 font-weight: 500;
 transition: all 1 ease 0s;
}
li:nth-child(1):hover{
	
}
li:nth-child(1){
padding: 0px 100px 0 0 ;
}
li:nth-child(2){
padding: 0px 100px 0 0 ;
}
li:nth-child(3){
padding: 0px 100px 0 0 ;
}

	img {
}


		
	
	


</style>

<script>
	import { onMount } from "svelte";


	import * as THREE from "three";
	import BasicButton from "./Buttons/BasicButton.svelte";
	import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'
	let canvas;

	
	

	export let nav;
	onMount(() => {
			nav.style.width = window.outerWidth;
			window.onscroll = function() {scrollfunc()}
			function scrollfunc(){
				console.log("scroll");
			}
	});
	

</script>