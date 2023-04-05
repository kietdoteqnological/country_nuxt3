<template>
	<div class="flex flex-col gap-5">
		<div class="w-full flex justify-between px-[162px] text-lg dark:text-white">
			<div class="flex items-center gap-1 border min-w-[330px] w-2/5 relative">
				<Icon name="ic:outline-search" class="absolute left-3" />
				<input
					type="text"
					class="pl-9 h-11 w-full dark:bg-slate-700"
					placeholder="Search for a country..."
					v-model="search"
					@input="getSearchResult"
				/>
			</div>
			<select class="border-2 dark:bg-slate-700 w-1/4" v-model="filter" @change="getSearchResult">
				<option value="">All</option>
				<option v-for="data in regionList" :key="data" :value="data">{{ data }}</option>
			</select>
		</div>
		<!-- <div>{{ countryList.filter((country) => country.name.official.includes('Viet')) }}</div> -->
		<div v-if="!loading" class="flex gap-16 flex-wrap justify-center">
			<CountryCard
				v-for="country in displayCountryList.slice((currentPage - 1) * 20, currentPage * 20)"
				:key="country.population"
				:capital="country.capital[0] ? country.capital[0] : 'Unknow'"
				:name="country.name.official"
				:population="country.population"
				:region="country.region"
				:url-image="country.flags.png"
			/>
		</div>
		<div v-else class="flex gap-16 flex-wrap justify-center">
			<CountryCardSkeleton v-for="index in 20" :key="index" />
		</div>

		<vue-awesome-paginate
			:total-items="displayCountryList.length"
			:items-per-page="20"
			:max-pages-shown="5"
			v-model="currentPage"
			:on-click="onClickHandler"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { useCountryStore } from '~/store/store';
	import { storeToRefs } from 'pinia';
	import { Region } from '~/interface/country';

	const { displayCountryList, loading, error } = storeToRefs(useCountryStore());
	const store = useCountryStore();
	const search = ref('');
	const filter = ref('');

	const regionList: Region[] = ['Americas', 'Africa', 'Asia', 'Europe', 'Oceania'];
	if (displayCountryList.value.length === 0) store.fetchCountry();

	const onClickHandler = (page: number) => {
		console.log(page);
	};

	const currentPage = ref(1);
	const getSearchResult = () => {
		currentPage.value = 1;
		store.getCountryFilter(search.value, filter.value);
	};
</script>

<style>
	.pagination-container {
		display: flex;
		column-gap: 10px;
		padding-bottom: 20px;
		align-self: center;
	}
	.paginate-buttons {
		height: 40px;
		width: 40px;
		border-radius: 20px;
		cursor: pointer;
		background-color: rgb(242, 242, 242);
		border: 1px solid rgb(217, 217, 217);
		color: black;
	}
	.paginate-buttons:hover {
		background-color: #d8d8d8;
	}
	.active-page {
		background-color: #3498db;
		border: 1px solid #3498db;
		color: white;
	}
	.active-page:hover {
		background-color: #2988c8;
	}
</style>
