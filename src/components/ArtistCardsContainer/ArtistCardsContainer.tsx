import React, { useContext } from 'react'
import { MusicPlayerContext } from '../../context/MusicPlayerContext'
import { IResponseArtistInfo } from '../../interfaces/responses'
import ArtistCardComponent from '../ArtistCard/ArtistCardComponent'
import { ArtitsCardsMainContainer } from './ArtistCardsContainer.styled'

const ArtistCardsContainer = () => {

  const { artistHistory } = useContext(MusicPlayerContext)

  return (
    <ArtitsCardsMainContainer>
					{artistHistory !== undefined &&
            artistHistory.map((el:IResponseArtistInfo)=>{
              const {id, name, images, backgroundColor} = el;
              return (
                <ArtistCardComponent key={id} id={id} name={name} img={images[1]?.url} backgroundColor={backgroundColor}/>
              )
            })
          }
		</ArtitsCardsMainContainer>
  )
}

export default ArtistCardsContainer