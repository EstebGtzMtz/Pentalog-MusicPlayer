import SearchBarComponent from "../../components/SearchBar/SearchBarComponent";
import MusicPlayerProvider from "../../context/MusicPlayerProvider"
import { MainViewComponent } from "./MainView.styled"


const MainView = () => {
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