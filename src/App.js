
import './index.css';
import './App.css';

import Header from './cabecalho.js';
import Body from './body.js';
import Timer from './timer';

function App() {
  return (
    <div >
      <Header />
      <div className="bg-gray-700 h-screen">
        <Body />
      </div>
    </div>
  );
}

export default App;
