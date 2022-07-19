import { IResponseArtistInfo, IResponseTracksInfo } from "../interfaces/responses";
import { getRandomColor } from "./functions";

export const artistInfoParser = (data:IResponseArtistInfo[]): IResponseArtistInfo=>{
    const {name, genres, id, images} = data[0];
    const backgroundColor:string = getRandomColor(7);
    return {
        name,
        genres,
        images,
        id,
        backgroundColor
    }
}

export const tracksInfoParser = (data: IResponseTracksInfo[]):IResponseTracksInfo[] => {
    const parserArray = data.map(el => {
        return {
            id: el.id,
            name: el.name,
            preview_url: el.preview_url,
            external_urls: el.external_urls
        }
    })

    return parserArray;
}
