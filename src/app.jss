import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './pages/Home'
import Translator from './pages/Translator'
import Background from './pages/Background'
import Practice from './pages/Practice'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/translator" element={<Translator />}/>
        <Route path="/practice" element={<Practice />}/>
      </Routes>
    </Router>
  );
}

export default App;
