import { defineStore } from 'pinia';
import { CountryInterface } from '~/interface/country';
import { ofetch } from 'ofetch';

export type CountryInitialState = {
	countryList: CountryInterface[];
	loading: boolean;
	error?: string;
};

export const useCountryStore = defineStore('country', {
	// other options...
	state: (): CountryInitialState => {
		return {
			countryList: [],
			loading: true,
		};
	},
	getters: {
		// doubleCount: (state) => state.count * 2,
		// getAllCountry: (state) => {
		//     const tmp =
		// }
	},
	actions: {
		async fetchCountry() {
			try {
				const data = await ofetch<CountryInterface[]>('https://restcountries.com/v3.1/all');

				this.countryList = data;
				this.loading = false;
			} catch (err) {
				const error = err as string;
				this.error = error;
			}
		},
	},
});
