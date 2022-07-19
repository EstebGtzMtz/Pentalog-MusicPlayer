import { FunctionComponent, useContext } from 'react'
import { MusicPlayerContext } from '../../context/MusicPlayerContext'
import { ISearchBarProps } from '../../interfaces/intefaces'
import { IResponseArtistInfo } from '../../interfaces/responses'
import { getAccesToken } from '../../services/AuthService'
import { getArtistInfo } from '../../services/spotifyServices'
import {SearchBarMainContainer} from './SearchBar.styled';

const SearchBarComponent:FunctionComponent<ISearchBarProps> = ({width, height, placeholder}:ISearchBarProps) => {

	const {
		searchBarInput,setSearchBarInput,
		artistHistory, setArtistHistory,
		handleSearchBarInput
	} = useContext(MusicPlayerContext);

	

	const setTokenInLS = async()=>{
		const accesToken = await getAccesToken();
		localStorage.setItem('accesToken', accesToken);
  }

	const onSubmitGetArtist = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
		try {
			const response:IResponseArtistInfo = await getArtistInfo(searchBarInput);
			if(response){
				const newState = [response, ...artistHistory];
				setArtistHistory(newState);
        localStorage.setItem('artistHistory', JSON.stringify(newState));
				setSearchBarInput('');
			}
		} catch (error) {
			setTokenInLS();
		}
		
	}

  return (
    <SearchBarMainContainer 
			width={width} 
			height={height} 
		>
			<form onSubmit={onSubmitGetArtist}>
				<input 
					type="text" 	
					value={searchBarInput} 
					onChange={(e)=>handleSearchBarInput(e.target.value)}
					placeholder={placeholder}
				/>
			</form>
    </SearchBarMainContainer>
  )
}

export default SearchBarComponent