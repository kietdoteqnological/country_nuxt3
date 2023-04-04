import { defineStore } from 'pinia';
import { CountryInterface } from '~/interface/country';
import { ofetch } from 'ofetch';

export type CountryInitialState = {
	countryList: CountryInterface[];
	displayCountryList: CountryInterface[];
	selectedCountry?: CountryInterface;
	loading: boolean;
	error?: string;
};

export const useCountryStore = defineStore('country', {
	// other options...
	state: (): CountryInitialState => {
		return {
			countryList: [],
			displayCountryList: [],
			selectedCountry: undefined,
			loading: true,
		};
	},
	getters: {
		// getCountryDetails() {
		// 	(name: string) =>
		// 		(this.selectedCountry = this.countryList.find((country) =>
		// 			country.name.official.includes(name)
		// 		));
		// },
	},
	actions: {
		async fetchCountry() {
			try {
				const data = await ofetch<CountryInterface[]>(
					'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,subregion,languages'
				);

				this.countryList = data;
				this.loading = false;
				this.displayCountryList = this.countryList;
			} catch (err) {
				const error = err as string;
				this.error = error;
			}
		},
		async fetchDetailCountry(name: string) {
			try {
				const data = await ofetch<CountryInterface[]>(
					`https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,capital,region,population,flags,subregion,languages`
				);

				this.selectedCountry = data[0];
				this.loading = false;
			} catch (err) {
				const error = err as string;
				this.error = error;
			}
		},
		getCountryFilter(search: string, filter: string) {
			if (filter === '') {
				this.displayCountryList = this.countryList.filter((country) =>
					country.name.official.includes(search)
				);
				return;
			}
			if (search === '') {
				this.displayCountryList = this.countryList.filter((country) => country.region === filter);
				return;
			}

			this.displayCountryList = this.countryList.filter(
				(country) => country.region === filter && country.name.official.includes(search)
			);
		},
		getCountryDetails(name: string) {
			this.selectedCountry = this.countryList.find((country) =>
				country.name.official.includes(name)
			);
			if (this.countryList.length === 0) {
				this.fetchDetailCountry(name);
			}
		},
	},
});
