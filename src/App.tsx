import 'src/App.css';

import Nav from 'src/components/Nav';
import WeatherDetail from '~/src/components/WeatherDetail';

function App() {
  return (
    <main className="App">
      <Nav />
      <div className="content">
        <WeatherDetail />
      </div>
    </main>
  );
}

export default App;
