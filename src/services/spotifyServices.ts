import axios from 'axios';
import { artistInfoParser, tracksInfoParser } from '../helpers/parsersToReturnData';
import { IResponseArtistInfo, IResponseGetData, IResponseGetTracksData, IResponseTracksInfo } from '../interfaces/responses';

const baseURL: string = 'https://api.spotify.com/v1';

const service = axios.create({
	baseURL
})


export const getArtistInfo = async (artistName: string) => {
  const accesToken = localStorage.getItem('accesToken');
	const response:IResponseGetData = await service.get(`${baseURL}/search?q=${artistName.replace(' ','')}&type=artist&limit=2`, {
    headers:{
      Authorization: `Bearer ${accesToken}`
    }
  });
	const {data:{artists:{items}}} = response;
	const finalRes: IResponseArtistInfo = artistInfoParser(items);
	return finalRes;
}

export const getArtistTopTracks = async(id: string)=>{
  const accesToken = localStorage.getItem('accesToken');
	const response: IResponseGetTracksData = await service.get(`${baseURL}/artists/${id}/top-tracks?market=MX&limit=10`,{
    headers:{
      Authorization: `Bearer ${accesToken}`
    }
  })
	const {data:{tracks}} = response;
	const finalRes: IResponseTracksInfo[] = await tracksInfoParser(tracks);
	return finalRes;
}