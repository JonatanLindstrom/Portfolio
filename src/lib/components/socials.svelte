<script lang="ts">
	import Facebook from '$lib/assets/icons/facebook.svg'
	import Instagram from '$lib/assets/icons/instagram.svg'
	import GitHub from '$lib/assets/icons/github.svg'
	import LinkedIn from '$lib/assets/icons/linkedin.svg'

	import { FACEBOOK_URL, LINKEDIN_URL, INSTAGRAM_URL, GITHUB_URL } from '$lib/constants/socials'
</script>

<slot>
	<div class="flex gap-8 md:gap-4">
		<a href={FACEBOOK_URL} target="_blank" value="noreferrer">
			<Facebook class="h-10 w-10 dark:fill-surface-50" />
		</a>
		<a href={INSTAGRAM_URL} target="_blank" value="noreferrer">
			<Instagram class="h-10 w-10 dark:fill-surface-50" />
		</a>
		<a href={GITHUB_URL} target="_blank" value="noreferrer">
			<GitHub class="h-10 w-10 dark:fill-surface-50" />
		</a>
		<a href={LINKEDIN_URL} target="_blank" value="noreferrer">
			<LinkedIn class="h-10 w-10 dark:fill-surface-50" />
		</a>
	</div>
</slot>
