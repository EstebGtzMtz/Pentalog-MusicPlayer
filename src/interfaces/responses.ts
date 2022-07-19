import { IExternalSpotify } from "./intefaces";

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
	id: string;
	loading?: string
	backgroundColor?: string;
}

export interface IResponseImages{
	height?:number;
	width?: number;
	url: string;

}

export interface IResponseGenres{
	genres: string;
}

export interface IResponseGetTracksData{
	data: IResponseTracks;
}

export interface IResponseTracks{
	tracks: IResponseTracksInfo[];
}

export interface IResponseTracksInfo{
	id?:string;
	name?: string;
	preview_url?: string;
	external_urls?: IExternalSpotify;
}

export interface IResponseTokenData{
	data:IResponseAccesToken;
}

export interface IResponseAccesToken{
	access_token: string;
}