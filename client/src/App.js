import './App.scss';
import Header from './components/Header/Header';
import Clubs from './components/Clubs/Clubs';
import SearchBar from './components/SearchBar/SearchBar';
function App() {
  return (
    <div className="App">
      <Header />
      <Clubs />
      {/* <SearchBar placeholder={"Search book"} /> */}
    </div>
  ); 
}

export default App;
