<script lang="ts">
	import '@skeletonlabs/skeleton/styles/all.css'
	import '@skeletonlabs/skeleton/themes/theme-crimson.css'
	import '../app.postcss'

	import { AppBar, LightSwitch, GradientHeading } from '@skeletonlabs/skeleton'
</script>

<svelte:head>
	<title>Jonatan Lindstr&#xf6;m</title>
</svelte:head>

<AppBar>
	<svelte:fragment slot="lead">
		<GradientHeading
			tag="h1"
			direction="bg-gradient-to-br"
			from="from-primary-500"
			to="to-accent-500"
		>
			Jonatan Lindström
		</GradientHeading>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>

<div class="mt-4">
	<slot />
</div>
