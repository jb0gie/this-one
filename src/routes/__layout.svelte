<script>
	import '../app.css';
	import Nav from '../components/_Nav.svelte';
	import Fetti from '../components/_Fetti.svelte';

</script>

<div class="p-auto max-w-3xl mx-auto">
	<Nav />
	<Fetti />
	<br />
	<slot />
</div>
