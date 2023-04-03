export interface CountryInterface {
	name: {
		common: string;
		official: string;
		nativeName: {
			eng: {
				official: string;
				common: string;
			};
		};
	};
	independent: true;
	status: string;
	unMember: boolean;
	currencies: {
		BBD: {
			name: string;
			symbol: string;
		};
	};
	capital: string[];
	region: string; // note union
	subregion: string;
	population: number;
	flag: string;
	flags: {
		png: string;
		svg: string;
		alt: string;
	};
}
