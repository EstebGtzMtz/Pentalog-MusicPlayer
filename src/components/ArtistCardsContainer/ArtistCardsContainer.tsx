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
              const {id, name, images} = el;
              return (
                <ArtistCardComponent key={id} id={id} name={name} img={images[1]?.url} />
              )
            })
          }
		</ArtitsCardsMainContainer>
  )
}

export default ArtistCardsContainer