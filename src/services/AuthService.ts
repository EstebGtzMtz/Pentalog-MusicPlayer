import axios from "axios";
import {Buffer} from 'buffer';
import { IResponseTokenData } from "../interfaces/responses";

const baseURL = 'https://accounts.spotify.com/api/token';

const service = axios.create({
	baseURL,
	withCredentials:true
})

export const getAccesToken = async()=>{
	const response:IResponseTokenData = await service.post(`${baseURL}`,'grant_type=client_credentials',{
		headers:{
			'Content-Type':'application/x-www-form-urlencoded',
			'Authorization': 'Basic ' + (new Buffer(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET).toString('base64'))
		},
	})
	const {data:{access_token}} = response;
	return access_token
}