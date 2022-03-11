import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Work from './components/work/Work';
import  Service  from './components/service/Service';



function App() {
  return (
    <div className="app">
      <div className="sections">
        <Header />
        <Home />
        <Work />
        <Service />
      </div>
    </div>
  );
}

export default App;
