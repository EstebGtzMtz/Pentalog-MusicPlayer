import { FunctionComponent, useContext, useEffect, useState } from 'react'
import { MusicPlayerContext } from '../../context/MusicPlayerContext';
import { IArtistCardProps } from '../../interfaces/intefaces'
import { IResponseTracksInfo } from '../../interfaces/responses';
import TrackListInfoComponent from '../AccordionInfo/AccordionInfoComponent';
import { ArtistCardContainer } from './ArtistCard.styled'

const ArtistCardComponent:FunctionComponent<IArtistCardProps> = ({ id, name, img, backgroundColor }: IArtistCardProps) => {

  useEffect(() => {
    if(id !==undefined){
      setTopTracksState(id)
    }
    // eslint-disable-next-line
  },[id])

  const [topTracks, setTopTracks] = useState<IResponseTracksInfo[]>([])

  const {getTopTracks} = useContext(MusicPlayerContext);

  const setTopTracksState = async (id:string) => {
    const response = await getTopTracks(id);
    setTopTracks(response)
  }

	return (
		<ArtistCardContainer id={id} backgroundColor={backgroundColor}>
			<div className='image-and-top-tracks'>
        <div className='artist-card'>
          <div className='artist-card-name-container'>
            <h2>{name}</h2>
          </div>
          <img src={img} alt={img} />
        </div>
        <TrackListInfoComponent tracks={topTracks} />
      </div>
		</ArtistCardContainer>
	)
}

export default ArtistCardComponent;
