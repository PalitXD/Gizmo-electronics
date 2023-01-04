<script>
	
	let buttonProps = {
	class:[$$restProps.class]
	}
</script>
	<button on:click
			on:mouseover
			on:mouseenter
			on:mouseleave
		{...buttonProps}>
			<slot/>
	</button>

<style>

	button{
        color: white;
        background-color: #333;
        border: none;
    }
    button:hover{
        background-color: #555;
    }
</style>