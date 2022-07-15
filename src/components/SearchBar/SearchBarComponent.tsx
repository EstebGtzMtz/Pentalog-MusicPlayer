import { FunctionComponent, useContext } from 'react'
import { MusicPlayerContext } from '../../context/MusicPlayerContext'
import { ISearchBarProps } from '../../interfaces/intefaces'
import { IResponseArtistInfo } from '../../interfaces/responses'
import { getArtistInfo } from '../../services/spotifyServices'
import {SearchBarMainContainer} from './SearchBar.styled'

const SearchBarComponent:FunctionComponent<ISearchBarProps> = ({width, height, placeholder}:ISearchBarProps) => {

	const {
		searchBarInput,setSearchBarInput,
		artistHistory, setArtistHistory,
		handleSearchBarInput
		} = useContext(MusicPlayerContext);

	const onSubmitGetArtist = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
		const response:IResponseArtistInfo = await getArtistInfo(searchBarInput);
		if(response){
			const newState = [...artistHistory,response];
			setArtistHistory(newState);
			setSearchBarInput('');
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