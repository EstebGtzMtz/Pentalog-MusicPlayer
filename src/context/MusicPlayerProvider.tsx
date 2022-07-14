import { MusicPlayerContext } from "./MusicPlayerContext";
import { IMusicPlayerProviderProps } from "../interfaces/intefaces";
import { useState } from "react";

const MusicPlayerProvider = ({ children }: IMusicPlayerProviderProps) => {

	const [searchBarInput, setSearchBarInput] = useState('');

  return (
		<MusicPlayerContext.Provider value={{searchBarInput, setSearchBarInput}}>
			{children}
		</MusicPlayerContext.Provider>
	);
};

export default MusicPlayerProvider;
