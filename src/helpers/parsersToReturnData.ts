import { IResponseArtistInfo } from "../interfaces/responses";

export const artistInfoParser = (data:IResponseArtistInfo[]): IResponseArtistInfo=>{
    const {name, genres, id, images} = data[0];
    return {
        name,
        genres,
        images,
        id
    }
}