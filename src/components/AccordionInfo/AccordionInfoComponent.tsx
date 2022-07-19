import { IResponseTracks, IResponseTracksInfo } from '../../interfaces/responses';
import { TracklistInfoContainer } from './AccordionInfo.styled'
import SongRowItem from './SongRowItem/SongRowItem';

const TrackListInfoComponent = ({tracks}:IResponseTracks) => {
  return (
    <TracklistInfoContainer>
      {tracks.map((el:IResponseTracksInfo, id: number)=>(
        <SongRowItem key={id} name={el.name} preview_url={el.preview_url} external_urls={el.external_urls}/>
      ))}
    </TracklistInfoContainer>
  )
}

export default TrackListInfoComponent