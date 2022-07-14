import MusicPlayerProvider from "../../context/MusicPlayerProvider"
import { MainViewComponent } from "./MainView.styled"


const MainView = () => {
  return (
    <MusicPlayerProvider>
      <MainViewComponent>
        <h1>que onda carnal</h1>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </MainViewComponent>
    </MusicPlayerProvider>
  )
}

export default MainView;