<template>
	<div class="flex flex-col gap-24 font-mono dark:bg-slate-900 dark:text-white h-screen">
		<button
			@click="goBack"
			class="border flex items-center gap-1 text-lg w-fit px-4 drop-shadow-xl"
		>
			<Icon name="ic:baseline-arrow-back" class="" />
			<span>Back</span>
		</button>
		<div class="flex gap-32 items-center">
			<img :src="selectedCountry?.flags.png" class="w-2/5" />
			<div class="flex flex-col gap-6 w-1/2">
				<div class="text-3xl font-bold">{{ selectedCountry?.name.official }}</div>
				<div class="flex gap-11 justify-between notify">
					<div class="flex flex-col gap-2">
						<div><span>Name</span> : {{ selectedCountry?.name.official }}</div>
						<div><span>Population</span> : {{ selectedCountry?.population }}</div>

						<div><span>Capital</span> : {{ selectedCountry?.capital.toString() }}</div>
					</div>
					<div class="flex flex-col gap-2">
						<div><span>Sub-region</span> : {{ selectedCountry?.subregion }}</div>
						<div><span>Region</span> : {{ selectedCountry?.region }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { storeToRefs } from 'pinia';
	import { useCountryStore } from '~/store/store';

	const route = useRoute();
	const router = useRouter();
	const { selectedCountry, loading, error } = storeToRefs(useCountryStore());
	const store = useCountryStore();

	store.getCountryDetails(route.params.name as string);
	const goBack = () => {
		router.back();
	};
</script>

<style scoped>
	.notify span {
		font-weight: bold;
	}
</style>
