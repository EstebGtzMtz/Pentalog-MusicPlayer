export interface IResponseGetData{
	data: IResponseArtist;
}

export interface IResponseArtist{
	artists:IResponseArtistItems;
}

export interface IResponseArtistItems{
	items:IResponseArtistInfo[];
}

export interface IResponseArtistInfo{
	images: IResponseImages[];
	genres: IResponseGenres[];
	name: string;
	id: number;
	loading?: string
}

export interface IResponseImages{
	height?:number;
	width?: number;
	url: string;

}

export interface IResponseGenres{
	genres: string;
}
