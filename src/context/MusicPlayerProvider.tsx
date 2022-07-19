import { MusicPlayerContext } from "./MusicPlayerContext";
import { IMusicPlayerProviderProps } from "../interfaces/intefaces";
import { useState } from "react";
import { IResponseArtistInfo } from "../interfaces/responses";
import { getArtistTopTracks } from "../services/spotifyServices";
import { getAccesToken } from "../services/AuthService";

const MusicPlayerProvider = ({ children }: IMusicPlayerProviderProps) => {

	const [searchBarInput, setSearchBarInput] = useState('');
	const [artistHistory, setArtistHistory] = useState<IResponseArtistInfo[]>([])

	const handleSearchBarInput = (value: string) =>{
		setSearchBarInput(value)
	}

  const setTokenInLS = async()=>{
		const accesToken = await getAccesToken();
		localStorage.setItem('accesToken', accesToken);
  }

  const getTopTracks = async (id: string)=>{
    try {
      const response = await getArtistTopTracks(id)
		  return response
    } catch (error) {
      console.log(error)
      setTokenInLS();
    }
    
  }

  return (
		<MusicPlayerContext.Provider value={{
			searchBarInput,
			setSearchBarInput,
			handleSearchBarInput,
			artistHistory,
			setArtistHistory,
			getTopTracks
		}}>
			{children}
		</MusicPlayerContext.Provider>
	);
};

export default MusicPlayerProvider;
