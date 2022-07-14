import { FunctionComponent, useContext } from 'react'
import { MusicPlayerContext } from '../../context/MusicPlayerContext'
import { ISearchBarProps } from '../../interfaces/intefaces'
import {SearchBarMainContainer} from './SearchBar.styled'

const SearchBarComponent:FunctionComponent<ISearchBarProps> = ({width, height, placeholder}:ISearchBarProps) => {

	const {searchBarInput, setSearchBarInput} = useContext(MusicPlayerContext)

	const handleSearchBarInput = (value: string) =>{
		setSearchBarInput(value)
	}

  return (
    <SearchBarMainContainer 
			width={width} 
			height={height} 
		>
        <input 
					type="text" 
					value={searchBarInput} 
					onChange={(e)=>handleSearchBarInput(e.target.value)}
					placeholder={placeholder}
				/>
    </SearchBarMainContainer>
  )
}

export default SearchBarComponent