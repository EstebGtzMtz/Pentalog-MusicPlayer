import axios from 'axios';
import { HEADERS } from '../helpers/constants';
import { artistInfoParser } from '../helpers/parsersToReturnData';
import {  IResponseArtistInfo, IResponseGetData } from '../interfaces/responses';

const baseURL: string = 'https://api.spotify.com/v1';

const service = axios.create({
    baseURL
})

export const getArtistInfo = async (artistName: string) => {
    const response:IResponseGetData = await service.get(`${baseURL}/search?q=${artistName.replace(' ','')}&type=artist&limit=2`, HEADERS);
    const {data:{artists:{items}}} = response;
    const finalRes: IResponseArtistInfo = artistInfoParser(items);
    return finalRes;
    
}

