import React, { useContext, useEffect, useState } from 'react'
import { MusicPlayerContext } from '../../context/MusicPlayerContext'
import { IResponseArtistInfo } from '../../interfaces/responses'
import ArtistCardComponent from '../ArtistCard/ArtistCardComponent'
import { ArtitsCardsMainContainer } from './ArtistCardsContainer.styled'

const ArtistCardsContainer = () => {
  const { artistHistory } = useContext(MusicPlayerContext)

  useEffect(() => {
    getHistoryFromStorage()
  }, [artistHistory])
  
  const [historyFromStorage, setHistoryFromStorage] = useState<IResponseArtistInfo[]>([])

  const getHistoryFromStorage = ()=>{
    const history = localStorage.getItem('artistHistory'); 
    if(history){
      const parsedJSON = JSON.parse(history)
      const newState = [parsedJSON, ...historyFromStorage];
      setHistoryFromStorage(newState[0])
    }
  }

  return (
    <ArtitsCardsMainContainer>
      <div className='recent-searches-container'>
        <h1>
          Recent Searches
        </h1>
      </div>
					{artistHistory ?
            historyFromStorage.map((el:IResponseArtistInfo)=>{
              const {id, name, images, backgroundColor} = el;
              return (
                <ArtistCardComponent key={id} id={id} name={name} img={images[1]?.url} backgroundColor={backgroundColor}/>
              )
            }): <div className='no-results-container'>Type to get your favourite music</div>
          }
		</ArtitsCardsMainContainer>
  )
}

export default ArtistCardsContainer