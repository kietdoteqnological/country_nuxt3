<template>
	<div>
		<ul>
			<li v-for="country in countryList" :key="country.population">
				{{ country.name.official }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
	import { useCountryStore } from '~/store/store';
	import { storeToRefs } from 'pinia';
	// const data = await useFetch('https://restcountries.com/v3.1/all').data;
	const { countryList, loading, error } = storeToRefs(useCountryStore());
	const store = useCountryStore();
	// watchEffect(async () => {
	// 	await store.fetchCountry();
	// });
	// await useAsyncData('user', () => store.fetchCountry());
	store.fetchCountry();
	const data = store.countryList;
	console.log(countryList);
</script>

<style></style>
