<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton'

	import Wip from '$lib/components/wip.svelte'
	import Socials from '$lib/components/socials.svelte'
</script>

<div class="grid grid-cols-2 lg:grid-cols-4 gap-2 m-8">
	<Avatar src="/headshot.jpg" class="col-span-1 select-none" rounded="rounded-3xl" width="w-48" />

	<div class="col-span-3 ml-2">
		<Wip />
		<Socials />
	</div>
</div>
