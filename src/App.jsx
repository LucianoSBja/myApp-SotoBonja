import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer texto="Chau" />
		</>
	);
}

export default App;
