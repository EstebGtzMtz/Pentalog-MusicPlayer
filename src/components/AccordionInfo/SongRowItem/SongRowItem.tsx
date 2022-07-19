import { SongRowItemContainer } from "./SongRowItem.styled"
import {IResponseTracksInfo} from "../../../interfaces/responses";

const SongRowItem = ({name, preview_url, external_urls }:IResponseTracksInfo) => {

  const openFullSongInSpotify = () =>{
    window.open(external_urls?.spotify , '_blank');
  }

  return (
    <SongRowItemContainer>
      <div className="title-song">
        {name}
      </div>
      <div  className="link-to-spotify" onClick={openFullSongInSpotify}>
        <h2>
          full song in spotify
        </h2>
      </div>
      <div>
        <audio controls>
          <source src={preview_url}/>
        </audio>
      </div>
    </SongRowItemContainer>
  )
}

export default SongRowItem