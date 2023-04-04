<template>
	<div class="w-full h-screen text-2xl">
		<div
			class="h-[70px] border-b flex w-full items-center justify-between px-8 dark:bg-slate-700 dark:text-white"
		>
			<h1 class="font-bold">Where in the world ?</h1>
			<button
				class="flex items-center gap-[6px] hover:bg-slate-300 p-1 rounded text-lg"
				@click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
			>
				<Icon name="ic:outline-dark-mode" />
				Dark Mode
			</button>
		</div>
		<div class="px-8 pt-6 dark:bg-slate-900">
			<slot />
		</div>
	</div>
</template>

<script lang="ts" setup>
	type Theme = 'light' | 'dark';
	const setColorTheme = (newTheme: Theme) => {
		useColorMode().preference = newTheme;
	};
</script>
