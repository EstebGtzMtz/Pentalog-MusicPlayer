import axios from 'axios';
import { artistInfoParser } from '../../helpers/parsersToReturnData';
import {  IResponseArtistInfo, IResponseGetData } from '../../interfaces/responses';

const baseURL: string = 'https://api.spotify.com/v1';

const service = axios.create({
    baseURL
})

export const getArtistInfo = async () => {
    const response:IResponseGetData = await service.get(`${baseURL}/search?q=katyperry&type=artist&limit=2`,{headers:{
        Authorization:'Bearer BQCxJ2GA5SR2XRHJhAtIwakET8O126FPqQDxNG0PeindOh7LqdW6ey_o7MSknQdXkkbxse6dCnjyiSg1MWuIEKdEQKSuFoAXVmwv_R6g5mmO7OT4uNeu3kjPXa5wuS3StChDt5DiBpfHrfghOcN5jg2QyIo4HvfAfm29ZqTD3z-h5Awa'
    }});
    const {data:{artists:{items}}} = response;
    let finalRes: IResponseArtistInfo;
    if(items.length > 0) {
        finalRes = artistInfoParser(items);
        return finalRes;
    }
}

