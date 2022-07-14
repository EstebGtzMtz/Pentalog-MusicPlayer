import { useEffect } from "react";
import SearchBarComponent from "../../components/SearchBar/SearchBarComponent";
import { getArtistInfo } from "../../components/services/spotifyServices";
import MusicPlayerProvider from "../../context/MusicPlayerProvider"
import { MainViewComponent } from "./MainView.styled"


const MainView = () => {

  useEffect(() => {
    obtainArtistInfo();
  }, [])
  
  const obtainArtistInfo = async()=>{
    await getArtistInfo();
  }

  return (
    <MusicPlayerProvider>
      <MainViewComponent>
        <div className="header">
          <SearchBarComponent width={40} height={3} placeholder={'Search...'}/>
        </div>
      </MainViewComponent>
    </MusicPlayerProvider>  
  )
}

export default MainView;