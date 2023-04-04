export interface CountryInterface {
	flags: {
		png: string;
		svg: string;
		alt: string;
	};
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
	capital: string[];
	region: Region; //union
	population: number;
	subregion: string;
	languages: {
		[key: string]: string;
	};
}

export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
