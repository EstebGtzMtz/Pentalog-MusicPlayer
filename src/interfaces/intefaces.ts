import { IResponseArtistInfo } from "./responses";

export interface IMusicPlayerProviderProps {
    children: JSX.Element | JSX.Element[];
}

export interface ISearchBarProps{
    width?: number;
    height?:number;
    placeholder?: string;
}

export interface IArtistCardProps{
    img?: string;
    id: string;
    name?:string;
    backgroundColor?: string;
}

export interface IBackgroundColors{
    color: string;
}

export interface IResponseWrapper {
    response:IResponseArtistInfo
}

export interface IExternalSpotify{
    spotify: string;
}