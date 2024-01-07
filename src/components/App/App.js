
import './App';
import AppFilter from '../App-filter/appFilter';
import SearchPanel from '../Search-panel/searchPanel';
import AppInfo from '../App-info/appInfo';
function App() {
  return (
    <div className="App">
      <div className='content'>
        <AppInfo/>
        <div>
          <SearchPanel/>
          <AppFilter/>
        </div>
      </div>
    </div>
  );
}

export default App;
