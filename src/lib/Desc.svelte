
<div>
    <img src="final.png" alt="GIZMOe" style="width:2000px">
    <img src="GIZMO.png" alt="LOGO" style="width:200">
</div>
<header>
  <h1>The next generation of EV's</h1>
</header>
<link href='https://fonts.googleapis.com/css?family=Anek Devanagari' rel='stylesheet'>
<link href='https://fonts.googleapis.com/css?family=Figtree' rel='stylesheet'>

<style>

header{
  align-items: center;
position: absolute;
z-index: 2;
left: 35%;
top: 54%;
}
h1{
font-size: 250%;
font-family: 'Figtree';
color: whitesmoke;
}
img[alt*="GIZMOe"]{
  position: absolute;
  top: 0;
  align-self:baseline;
  height: 100%;
  object-fit: cover;
  width: auto;
  opacity: 1;
  transition: 1s;
  z-index: 0;
}
img[alt*="LOGO"]{
    position: absolute;
    z-index: 1;
    top: 30%;
    left: 30%;
    width: 40%;

}


</style>
<script>
 
    import { onMount } from "svelte";
	import { set_style } from "svelte/internal";
    let time = 0;
  let duration;

  let scrollY = 0;

 
 	onMount(() => {
        window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    

    let root = document.documentElement;

    

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "10px 10px";
  } else{
    document.getElementById("nav").style.padding = "30px 10px";
  }
}
});
</script>