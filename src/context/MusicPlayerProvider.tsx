import { MusicPlayerContext } from "./MusicPlayerContext";
import { IMusicPlayerProviderProps } from "../interfaces/intefaces";

const MusicPlayerProvider = ({ children }: IMusicPlayerProviderProps) => {
  return (
		<MusicPlayerContext.Provider value={{}}>
			{children}
		</MusicPlayerContext.Provider>
  );
};

export default MusicPlayerProvider;
