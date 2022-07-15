import { MusicPlayerContext } from "./MusicPlayerContext";
import { IMusicPlayerProviderProps } from "../interfaces/intefaces";
import { useState } from "react";

const MusicPlayerProvider = ({ children }: IMusicPlayerProviderProps) => {

	const [searchBarInput, setSearchBarInput] = useState('');
	const [artistHistory, setArtistHistory] = useState([])

	const handleSearchBarInput = (value: string) =>{
		setSearchBarInput(value)
	}

  return (
		<MusicPlayerContext.Provider value={{
			searchBarInput,
			setSearchBarInput,
			handleSearchBarInput,
			artistHistory,
			setArtistHistory
		}}>
			{children}
		</MusicPlayerContext.Provider>
	);
};

export default MusicPlayerProvider;
