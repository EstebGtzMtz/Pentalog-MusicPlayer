import {Routes, Route} from 'react-router-dom';
import MainView from './views/MainView/MainView';

const Router = () => {
  return (
		<>
			<Routes>
				<Route path='/' element={<MainView />} />
			</Routes>
		</>
  )
}

export default Router