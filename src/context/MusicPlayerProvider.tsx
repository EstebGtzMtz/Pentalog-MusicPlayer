import { MusicPlayerContext } from "./MusicPlayerContext";
import { IMusicPlayerProviderProps } from "../interfaces/intefaces";
import { useState } from "react";
import { IResponseArtistInfo } from "../interfaces/responses";
import { getArtistTopTracks } from "../services/spotifyServices";

const MusicPlayerProvider = ({ children }: IMusicPlayerProviderProps) => {

	const [searchBarInput, setSearchBarInput] = useState('');
	const [artistHistory, setArtistHistory] = useState<IResponseArtistInfo[]>([])

	const handleSearchBarInput = (value: string) =>{
		setSearchBarInput(value)
	}

  const getTopTracks = async (id: string)=>{
    const response = await getArtistTopTracks(id)
		return response
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
